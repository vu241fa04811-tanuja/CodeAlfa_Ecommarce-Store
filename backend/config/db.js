const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://ASCII_6321:tanu1236@ac-8griyxt-shard-00-00.kte2ajk.mongodb.net:27017,ac-8griyxt-shard-00-01.kte2ajk.mongodb.net:27017,ac-8griyxt-shard-00-02.kte2ajk.mongodb.net:27017/?ssl=true&replicaSet=atlas-tlk7d7-shard-0&authSource=admin&appName=Cluster0"
        );
        console.log("MongoDB connected ✅");
    } catch (error) {
        console.log("MongoDB connection error ❌", error);
    }
};

module.exports = connectDB;