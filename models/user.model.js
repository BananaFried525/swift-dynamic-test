const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    refId: { type: Number, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

module.exports = model('user', userSchema);