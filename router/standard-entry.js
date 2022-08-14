
const router = require('express').Router()
const mongoose = require('mongoose')
const { Standard } = require('../schema/standard')
const formidable = require("formidable")
mongoose.connect('mongodb://119.3.243.150:3333/standard')

router.post('/upload', async (req, res) => {
  const body = req.body
  const data = await Standard.findOne({ 'key': body.key })
  if (!data) {
    Standard.create(body, (err) => {
      if (err) res.send('cereate error')
      else res.send('success')
    })
  }
  else {
    res.send('exists')
  }
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

router.post('/getList/all', async (req, res) => {
  const data = await Standard.find({})
  // console.log(data)
  res.json({ data })
})

router.post('/getList/country', async (req, res) => {
  const data = await Standard.find({'type':'NationalStandard'})
  // console.log(data)
  res.json({ data })
})
router.post('/getList/industry', async (req, res) => {
  const data = await Standard.find({'type':'IndustryStandard'})
  // console.log(data)
  res.json({ data })
})
router.post('/getList/location', async (req, res) => {
  const data = await Standard.find({'type':'LocalStandard'})
  // console.log(data)
  res.json({ data })
})
router.post('/getList/group', async (req, res) => {
  const data = await Standard.find({'type':'groupStandard'})
  // console.log(data)
  res.json({ data })
})
router.post('/getList/national', async (req, res) => {
  const data = await Standard.find({'type':'InternationalStandard'})
  // console.log(data)
  res.json({ data })
})
router.post('/getList/bussiness', async (req, res) => {
  const data = await Standard.find({'type':'EnterpriseStandard'})
  // console.log(data)
  res.json({ data })
})

router.post('/checkStandard', async (req, res) => {
  const body = req.body
  const { search } = body
  const data = await Standard.find({
    $or: [
      { key: { $regex: search } },
      { chName: { $regex: search } }
    ]
  })
  console.log(data)
  res.json({ data })
})


router.get('/test', (req, res) => {
  res.send('test')
})

module.exports = {
  router
}