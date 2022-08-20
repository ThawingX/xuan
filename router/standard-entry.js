
const router = require('express').Router()
const mongoose = require('mongoose')
const { Standard } = require('../schema/standard')
const formidable = require("formidable")
const { getListType } = require('../utils/getListType')
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

//  匹配所有获取标准列表请求
router.post('/getList', async (req, res) => {
  const requestKey = req.body.requestKey
  let data
  if (requestKey === 'all') {
    data = await Standard.find({})
  }
  else {
    const requestKeyType = getListType(requestKey)
    const queryConfig = {}
    // 动态key值
    queryConfig[requestKeyType] = requestKey
    console.log(queryConfig)
    data = await Standard.find(queryConfig)
  }
  res.json({ data })
})


router.post('/checkStandard', async (req, res) => {
  const body = req.body
  const { searchKey: search } = body
  let data
  try {
    data = await Standard.find({
      $or: [
        { key: { $regex: search } },
        { chName: { $regex: search } }
      ]
    })
    res.json({ data, message: '结束搜索' })
  } catch (err) {
    res.send(err)
  } finally {
    // 暂时先空
  }
})


router.get('/test', (req, res) => {
  res.send('test')
})

module.exports = {
  router
}