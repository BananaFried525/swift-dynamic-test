const { model, Schema } = require("mongoose");

const reportSchema = new Schema({
    name: { type: String, unique: true, required: true },
    owner: [{
        refId: { type: Number, required: true },
        isApprove: Boolean
    }]
});

module.exports = model('report', reportSchema);