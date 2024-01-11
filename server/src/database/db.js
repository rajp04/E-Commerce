const mongoose = require("mongoose");

const Database = async () => {
    try {
        const connectionString = await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionString.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

module.exports = Database;
