const mongoose = require('mongoose');
const connect_db = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connceted");
    } catch (error) {
        console.log("database connection failed",error.message);
    }
}
    
module.exports = connect_db;