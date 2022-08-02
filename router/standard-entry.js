
const router = require('express').Router()
const mongoose = require('mongoose')
const { Standard } = require('../schema/standard')
const formidable = require("formidable")
mongoose.connect('mongodb://119.3.243.150:3333/standard')

router.post('/upload', (req, res) => {
  const body = req.body
  Standard.create(body, (err) => {
    if (err) res.send('error')
    else res.send('success')
  })
})
router.post('/uploadFile', (req, res) => {
  const form = new formidable.IncomingForm()
  let key = ''
  let filepath = ''
  form.parse(req, (fields, files) => {
    key = files.key
  })
  form.on('fileBegin', function (formName, file) {
    file.filepath = `/root/data/standards/` + file.originalFilename
    filepath = file.filepath
  })
  form.on('end', () =>
    Standard.findOneAndUpdate({ 'key': key }, {
      $set: {
        'url': filepath
      }
    }, () => {
      console.log('test')
    })
  )
  res.send('uploadFile')
})

router.get('/test', (req, res) => {
  res.send('test')
})

module.exports = {
  router
}