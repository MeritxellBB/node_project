const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AwardSchema = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true },
    series: [{ type: Schema.Types.ObjectId, ref: "serie", required: true }]
});

const Award = mongoose.model("award", AwardSchema);
module.exports = Award;