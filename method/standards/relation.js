const { relationalStandardModel } = require('../../schema/relationalStandards')
module.exports = async function (req, res, next) {
  try {
    const { id, subStandards, time } = req.body
    if (!id || subStandards.length < 1) {
      return res.json({
        code: 0,
        message: "invalid request",
        result: req.body
      })
    }
    const isSelf = subStandards.some((subId) => subId === id)
    if (isSelf) {
      return res.json({
        code: 0,
        message: "不能关联自己",
        result: subStandards
      })
    }
    const findRes = await relationalStandardModel.findOne({ id })
    if (!findRes) {
      const createRes = await relationalStandardModel.create({ id })
      console.log("创建成功")
    }
    else {
      const isRepeat = findRes.subStandards.some((subId) => {
        return subStandards.includes(subId)
      })
      console.log(isRepeat)
      if (isRepeat) {
        return res.json({
          code: 0,
          message: "已经关联了此标准",
          result: subStandards
        })
      }

    }
    const { acknowledged, modifiedCount, matchedCount } = await relationalStandardModel.updateOne(
      { id },
      {
        $push: { subStandards: { $each: subStandards } }
      })
    if (acknowledged && modifiedCount > 0) {
      return res.json({
        code: 1,
        message: "添加成功",
        result: { id, subStandards }
      })
    }
    if (acknowledged && matchedCount) {
      return res.json({
        code: 0,
        message: "未修改",
        result: { id, subStandards }
      })
    }
    res.json({
      code: 0,
      message: "操作失败",
      result: { id, subStandards }
    })
  } catch (err) {
    return res.json({
      code: 0,
      message: "失败",
      result: err
    })
  }
  finally { }

}