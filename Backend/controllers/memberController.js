const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const tb_member = db.tb_member;

const createMember = async (req, res) => {
    try {
        const { m_user, m_pass, m_name, m_phone } = req.body;

        // ตรวจสอบข้อมูลที่ส่งมาว่าครบถ้วนหรือไม่
        if (!m_user || !m_pass || !m_name || !m_phone) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // ตรวจสอบว่ามีชื่อหรือเบอร์โทรนี้อยู่ในระบบแล้วหรือไม่
        const alreadyExistsName = await tb_member.findOne({ where: { m_name } });
        const alreadyExistsPhone = await tb_member.findOne({ where: { m_phone } });

        if (alreadyExistsName) {
            return res.json({ message: 'มีชื่อนี้อยู่ในระบบแล้ว' });
        }
        if (alreadyExistsPhone) {
            return res.json({ message: 'มีเบอร์โทรนี้อยู่ในระบบแล้ว' });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(m_pass, saltRounds);

        // สร้างและบันทึกข้อมูลสมาชิกใหม่
        const newMember = await tb_member.create({
            m_user,
            m_name,
            m_pass: hashedPassword,
            m_phone
        });

        return res.status(200).json({ status_code: 200, message: 'สร้างผู้ใช้งานสำเร็จ', data: newMember });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการสร้างผู้ใช้งาน' });
    }
};

const login = async (req, res) => {
    try {
        const { m_user, m_pass } = req.body;

        // Find the user by m_user (assuming m_user is unique)
        const user = await tb_member.findOne({ where: { m_user } });

        // If user is not found or password is incorrect
        if (!user || !(await bcrypt.compare(m_pass, user.m_pass))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // User authentication successful, generate JWT token
        const token = jwt.sign({ m_user, m_pass }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return token to client
        return res.status(200).json({ message: "Welcome", m_user, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const searchMember = async (req, res) => {
    try {
        const { id, m_name,m_user } = req.query

        const whereClause = {}
        if (id) {
            whereClause.id = id
        }
        if (m_name) {
            whereClause.m_name = m_name
        }
        if (m_user) {
            whereClause.m_user = m_user
        }

        const member = await tb_member.findAll({
            where: whereClause,
        })

        return res.status(200).json({ member })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการค้นหาข้อมูลหนังสือ' });
    }
}

const allMember = async (req, res) => {
    try {
        // ดึงข้อมูลการยืมหนังสือทั้งหมดจากฐานข้อมูล
        const allMember = await tb_member.findAll({
    
        });

        return res.status(200).json({
            status_code: 200,
            message: "ดึงข้อมูลการยืมหนังสือทั้งหมดสำเร็จ",
            allMember
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการยืมหนังสือทั้งหมด' });
    }
}
module.exports = {
    createMember,
    login,
    searchMember,
    allMember
};
