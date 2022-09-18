const { relationalStandardModel } = require('../../schema/relationalStandards')
const { standardModel } = require('../../schema/standards')
module.exports = async function (req, res, next) {
  try {
    const { id } = req.query
    const data = await relationalStandardModel.findOne({ id })
    const { subStandards } = data
    const lists = []
    for (subId of subStandards) {
      const tempData = await standardModel.findOne({ id: subId })
      lists.push(tempData)
    }
    if (lists.length) {
      return res.json({
        code: 1,
        message: "OK",
        result: lists
      })
    }
    return res.json({
      code: 0,
      message: "空",
      result: data
    })
  } catch (err) {
    return res.json({
      code: 0,
      message: "失败",
      result: err
    })
  } finally {
  }

}