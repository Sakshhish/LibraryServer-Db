const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Scheam(
    {
        name:{
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
    );

    //users
    module.exports = mongoose.model("User", userSchema);