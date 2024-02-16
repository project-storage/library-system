module.exports = (sequelize, DataTypes) => {
    const tb_borrow_book = sequelize.define('tb_borrow_book', {
        br_date_br: {
            type: DataTypes.DATEONLY(),
            allowNull: false
        },
        br_date_rt: {
            type: DataTypes.DATEONLY(),
            allowNull: false
        },
        b_id: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        m_user: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        b_fine: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    })
    return tb_borrow_book
}
