const { subOptionsModel } = require('../../schema/subOptions')
module.exports = async function (req, res, next) {
    // 科研人员鉴权
    const { optionName, subOptionName } = req.body
    const findRes = await subOptionsModel.findOne({ optionName })
    if (!findRes) {
        return res.send('没有这个分类')
    }
    const {acknowledged,modifiedCount,matchedCount} = await subOptionsModel.updateOne({ optionName }, {
        $pull: { subOption: { subOptionName } }
    })
    if (acknowledged && modifiedCount > 0) {
        return res.send('删除成功')
    }
    if (acknowledged && matchedCount) {
        return res.send('已删除或未修改')
    }
    res.send('操作失败')
}