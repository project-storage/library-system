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

module.exports = {
    createBook
};
