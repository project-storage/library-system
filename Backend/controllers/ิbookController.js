const db = require('../models');

const tb_book = db.tb_book;

const createBook = async (req, res) => {
    try {
        const { b_id, b_name, b_writer, b_category, b_price } = req.body;

        // ตรวจสอบข้อมูลที่ส่งมาว่าครบถ้วนหรือไม่
        if (!b_id || !b_name || !b_writer || !b_category || !b_price) {
            return res.status(400).json({ message: "กรุณากรอกข้อมูลให้ครบทุกช่อง" });
        }

        // ตรวจสอบว่า b_price เป็นตัวเลขหรือไม่
        if (isNaN(b_price)) {
            return res.status(400).json({ message: "ราคาต้องเป็นตัวเลข" });
        }

        const newBook = await tb_book.create({
            b_id,
            b_name,
            b_writer,
            b_category,
            b_price
        });

        return res.status(200).json({ status_code: 200, message: 'สร้างหนังสือเรียบร้อยแล้ว', data: newBook });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ไม่สามารถสร้างหนังสือได้' });
    }
};

const searchBook = async (req, res) => {
    try {
        const { id, b_id } = req.query

        const whereClause = {}
        if (id) {
            whereClause.id = id
        }
        if (b_id) {
            whereClause.b_id = b_id
        }

        const book = await tb_book.findAll({
            where: whereClause
        })

        return res.status(200).json({ book })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการค้นหาข้อมูลหนังสือ' });
    }
}

const allBook = async (req, res) => {
    try {
        // ดึงข้อมูลการยืมหนังสือทั้งหมดจากฐานข้อมูล
        const allBooks = await tb_book.findAll({

        });

        return res.status(200).json({
            status_code: 200,
            message: "ดึงข้อมูลการยืมหนังสือทั้งหมดสำเร็จ",
            allBooks
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการยืมหนังสือทั้งหมด' });
    }
}
module.exports = {
    createBook,
    searchBook,
    allBook
};
