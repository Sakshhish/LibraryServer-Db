const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", (error) => {
        console.error("Connection Error:", error);
    });

    db.once("open", () => {
        console.log("DB Connected !!");
    });
}

module.exports = DbConnection;
