const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const mongoString = process.env.DATABASE_URL;
        await mongoose.connect(mongoString, );
        console.log('Database Connected');
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = dbConnect;
