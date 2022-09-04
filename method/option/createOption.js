const { subOptionsModel } = require('../../schema/subOptions')
module.exports = async function (req, res, next) {
    const { optionName, subOptionName, commiter } = req.body
    const findRes = await subOptionsModel.findOne({ optionName })
    if (!findRes) {
        const createRes = await subOptionsModel.create({ optionName })
        console.log("创建成功")
    }
    console.log(findRes.subOption)
    const isRepeat = findRes.subOption.every((_) => {
        console.log(_)
        return _.subOptionName === subOptionName
    })
    if (!isRepeat) {
        return res.send('已经有该子项了')
    }
    const { acknowledged, modifiedCount, matchedCount } = await subOptionsModel.updateOne({ optionName }, {
        $push: { subOption: { subOptionName, commiter } }
    })
    if (acknowledged && modifiedCount > 0) {
        return res.send('添加成功')
    }
    if (acknowledged && matchedCount) {
        return res.send('未修改')
    }
    res.send('操作失败')
}