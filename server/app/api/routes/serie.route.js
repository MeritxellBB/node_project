const express = require("express");
const router = express.Router();

const { createSerie, getAllSerie, getSerieById } = require("../controllers/serie.controllers");

router.post("/create", createSerie);
router.get("/", getAllSerie);
router.get("/:serieId", getSerieById);

module.exports = router;