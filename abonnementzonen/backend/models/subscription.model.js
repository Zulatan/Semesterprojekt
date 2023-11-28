// https://sequelize.org/docs/v6/core-concepts/model-basics/
//model basics + kode fra babyjourneydb 
module.exports = (sequelize, DataType) => {
    const Subscription = sequelize.define("subscription", {
        subscription_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        price: {
            type: DataType.INTEGER,
            allowNull: false
        },
        startdate: {
            type: DataType.DATE,
            allowNull: false
        },
        category: {
            type: DataType.STRING,
            allowNull: false
        },
        image: {
            type: DataType.TEXT("long"),
            allowNull: true
        },
        cycle: {
            type: DataType.STRING,
            allowNull: false
        },
        subscriptionplan: {
            type: DataType.STRING,
            allowNull: false
        },
        nextpayment: {
            type: DataType.DATE,
            allowNull: false
        }
    });

    return Subscription;
};