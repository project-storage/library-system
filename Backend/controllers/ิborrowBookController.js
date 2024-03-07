const db = require('../models')

const tb_borrow_book = db.tb_borrow_book
const tb_book = db.tb_book
const tb_member = db.tb_member

const createBorrow = async (req, res) => {
    try {
        const { br_date_br, br_date_rt, b_id, m_user, br_fine } = req.body

        // ตรวจสอบว่าข้อมูลที่ส่งมาครบถ้วนหรือไม่
        if (!br_date_br || !br_date_rt || !b_id || !m_user) {
            return res.status(400).json({ message: "กรุณากรอกข้อมูลให้ครบทุกช่อง" });
        }

        // สร้างข้อมูลการยืมหนังสือใหม่
        const newBorrow = await tb_borrow_book.create({ br_date_br, br_date_rt, b_id, m_user, br_fine })

        return res.status(200).json({
            status_code: 200,
            message: "สร้างข้อมูลการยืมหนังสือสำเร็จ",
            data: newBorrow
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการสร้างข้อมูลการยืมหนังสือ' });
    }
}

const searchBorrow = async (req, res) => {
    try {
        const { id, b_id, m_user } = req.query;

        const whereClause = {};
        if (id) {
            whereClause.id = id;
        }
        if (b_id) {
            whereClause.b_id = b_id;
        }
        if (m_user) {
            whereClause.m_user = m_user;
        }

        const borrow = await tb_borrow_book.findAll({
            where: whereClause,
            include: [
                { model: tb_book, as: 'tb_book' },
                { model: tb_member, as: 'tb_member' }
            ]
        });

        return res.status(200).json({ borrow });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการค้นหาข้อมูลหนังสือ' });
    }
};

const allBorrow = async (req, res) => {
    try {
        // ดึงข้อมูลการยืมหนังสือทั้งหมดจากฐานข้อมูล
        const allBorrows = await tb_borrow_book.findAll({
            include: [
                { model: tb_book, as: 'tb_book' },
                { model: tb_member, as: 'tb_member' }
            ]
        });

        return res.status(200).json({
            status_code: 200,
            message: "ดึงข้อมูลการยืมหนังสือทั้งหมดสำเร็จ",
            allBorrows
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการยืมหนังสือทั้งหมด' });
    }
}

module.exports = {
    createBorrow,
    searchBorrow,
    allBorrow
}
