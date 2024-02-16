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

module.exports = {
    createMember
};
