// https://sequelize.org/docs/v6/core-concepts/model-basics/
//model basics + kode fra babyjourneydb 
module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
        user_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fname: {
            type: DataType.STRING,
            allowNull: false
        },
        lname: {
            type: DataType.STRING,
            allowNull: false
        },
        image: {
            type: DataType.TEXT("long"),
            allowNull: true
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    });

    return User;
};