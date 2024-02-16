module.exports = (sequelize, DataTypes) => {
    const tb_book = sequelize.define('tb_book', {
        b_id: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
        b_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        b_writer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        b_category: {
            type: DataTypes.ENUM('1', '2', '3'), // เปลี่ยนให้รับค่าเป็นสตริง
            allowNull: false
        },
        b_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    })
    return tb_book
}
