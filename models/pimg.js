module.exports = (sequelize, DataTypes) => (
    sequelize.define('Pimg', {
        img: {
            type: DataTypes.STRING(200),
            allowNull: true,
        }
    }, {
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);