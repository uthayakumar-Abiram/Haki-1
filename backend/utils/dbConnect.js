const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const mongoString = process.env.MONGODB_URI;
        await mongoose.connect(mongoString, );
        console.log('Database Connected');
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = dbConnect;
