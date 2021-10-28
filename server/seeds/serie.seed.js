const mongoose = require('mongoose');
const Serie = require("../app/api/models/Serie.model");

const dotenv = require('dotenv');
dotenv.config();

const serie = [
    {
        name: 'You',
        año: '2018',
        plataforma: 'Netflix',
        temporadas: 3,
    },
    {
        name: 'Misa de medianoche',
        año: '2021',
        plataforma: 'Netflix',
        temporadas: 1,
    },
    {
        name: 'Succesion',
        año: '2018',
        plataforma: 'HBO',
        temporadas: 3,
    },
    {
        name: 'Chernobil',
        año: '2019',
        plataforma: 'HBO',
        temporadas: 1,
    },
    {
        name: 'Maid',
        año: '2021',
        plataforma: 'Neflix',
        temporadas: 1,
    },
    {
        name: 'Watchmen',
        año: '2019',
        plataforma: 'HBO',
        temporadas: 1,
    },
    {
        name: 'Devs',
        año: '2020',
        plataforma: 'HBO',
        temporadas: 1,
    },
    {
        name: 'Euphoria',
        año: '2019',
        plataforma: 'HBO',
        temporadas: 2,
    },
    {
        name: 'Nine Perfect Strangers',
        año: '2021',
        plataforma: 'Amazon Prime',
        temporadas: 1,
    },
    {
        name: 'House of Cards',
        año: '2013',
        plataforma: 'Neflix',
        temporadas: 6,
    },

];
const serieDocuments = serie.map(serie => new Serie(serie));
mongoose
    .connect('mongodb+srv://root:root1234@cluster0.wfger.mongodb.net/myserie?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allSerie = await Serie.find();
        if (allSerie.length) {
            await Serie.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Serie.insertMany(serieDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());