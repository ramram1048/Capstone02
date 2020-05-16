module.exports = (sequelize, DataTypes) => (
    sequelize.define('order', {
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        phone: { //핸드폰번호 - 필수입력란
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        phone2: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 1,
        },
        total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);