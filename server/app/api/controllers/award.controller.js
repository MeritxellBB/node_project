const Award = require("../models/award.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createAward = async (req, res, next) => {
    try {
        const newAward = new Award();
        newAward.name = req.body.name;
        newAward.year = req.body.year;
        newAward.series = req.body.series;
        const AwardDb = await newAward.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { award: AwardDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllAwards = async (req, res, next) => {
    try {
        const awards = await Award.find().populate("award");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { awards: awards }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createAward, getAllAwards }