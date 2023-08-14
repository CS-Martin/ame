import sequelize from "../../config";

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error: any) {
        console.error('Unable to connect to the database:', error);
    }
}

export default { connect };