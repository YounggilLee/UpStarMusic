// Todo: create Album Schema
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSolid: Number,
    nomberTracks: Number,
    image: String,
    revenue: Number
})

module.exports = AlbumSchema