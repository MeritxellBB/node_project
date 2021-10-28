const Serie = require("../models/Serie.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createSerie = async (req, res, next) => {
    try {
        const newSerie = new Serie();
        newSerie.name = req.body.name;
        newSerie.year = req.body.year;
        newSerie.plataforma = req.body.plataforma;
        newSerie.temporadas = req.body.temporadas;
        const SerieDb = await newSerie.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { serie: SerieDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllSerie = async (req, res, next) => {
    try {
        // Si no pasais paginación por query params quitar el if
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const serie = await Serie.find().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { serie: serie }
            });
        } else {
            const serie = await Serie.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { serie: serie }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getSerieById = async (req, res, next) => {
    try {
        const { serieId } = req.params;
        const serieById = await Serie.findById(serieId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { serie: serieById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createSerie, getAllSerie, getSerieById };