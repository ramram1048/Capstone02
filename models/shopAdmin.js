module.exports = (sequelize, DataTypes) => (
    sequelize.define('shopAdmin', {

    }, {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);