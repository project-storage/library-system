module.exports = (sequelize, DataTypes) => {
    const tb_member = sequelize.define('tb_member', {
        m_user: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        m_pass: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        m_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        m_phone: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    })
    return tb_member
}
