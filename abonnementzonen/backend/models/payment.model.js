// https://sequelize.org/docs/v6/core-concepts/model-basics/
//model basics + kode fra babyjourneydb 
module.exports = (sequelize, DataType) => {
    const Payment = sequelize.define("payment", {
        payment_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        price: {
            type: DataType.STRING,
            allowNull: false
        },
        nextpayment: {
            type: DataType.DATE,
            allowNull:false
        },
        cycle: {
            type: DataType.STRING,
            allowNull: false
        }
    });

    return Payment;
};