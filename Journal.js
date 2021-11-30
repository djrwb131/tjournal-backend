const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const JournalSchema = new mongoose.Schema({
    content: String,
    date: Date
})
module.exports = mongoose.model('JournalModel', JournalSchema)
router.get('/', (req,res) => {
  res.send("Requested journal entries...")
})
router.get('/today', (req,res) => {
  res.send("TBI")
})
router.post('/new', async (req,res) => {
    const newEntry = new JournalModel(req.body)
    const saved = await newEntry.save()
    res.json(saved)
})
