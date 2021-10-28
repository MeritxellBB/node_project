const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SerieSchema = new Schema(
    {
        name: { type: String, require: true },
        año: { type: Number, require: true },
        plataforma: { type: String, require: true },
        temporadas: { type: Number, require: true }
    },
    { timestamps: true }
);

const Serie = mongoose.model("serie", SerieSchema);
module.exports = Serie;