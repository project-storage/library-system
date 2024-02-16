const dbConfig = require('../config/dbconfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database...');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tb_member = require('./tb_memberModel')(sequelize, DataTypes);
db.tb_book = require('./tb_bookModel')(sequelize, DataTypes);
db.tb_borrow_book = require('./tb_borrow_bookModel')(sequelize, DataTypes);

// user and borrow_book one-to-many
db.tb_member.hasMany(db.tb_borrow_book, {
    foreignKey: "m_user",
    as: "tb_borrow_books"
});
db.tb_borrow_book.belongsTo(db.tb_member, {
    foreignKey: "m_user",
    as: "tb_member"
});

// book and borrow_book one-to-many
db.tb_book.hasMany(db.tb_borrow_book, {
    foreignKey: "b_id",
    as: "tb_borrow_books"
});
db.tb_borrow_book.belongsTo(db.tb_book, {
    foreignKey: "b_id",
    as: "tb_book"
});

(async () => {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully!');
})();

module.exports = db;
