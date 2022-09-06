const { standardModel } = require('../../schema/standards')
const { detectItemModel } = require('../../schema/detectItem')
module.exports = async function (req, res, next) {
    try {
        const { standardId, detectItem, detectItemId, detectMethod, detectMethodId, equipment, equipmentRequirement, requirement } = req.body
        if (!standardId) {
            return res.send('invalid request')
        }
        const findRes = await standardModel.findOne({ id: standardId })
        if (!findRes) {
            return res.send('不存在这个标准，请查验')
        }

        const findDetectRes = await detectItemModel.findOne({ id: standardId })
        if (!findDetectRes) {
            const createRes = await detectItemModel.create({ id: standardId })
        }
        const { acknowledged, modifiedCount, matchedCount } = await detectItemModel.updateOne({ id: standardId }, {
            $push: {
                detectItem: {
                    detectItem, detectItemId, detectMethod, detectMethodId, equipment, equipmentRequirement, requirement
                }
            }
        })
        if (acknowledged && modifiedCount > 0) {
            return res.send('添加成功')
        }
        if (acknowledged && matchedCount) {
            return res.send('未修改')
        }
        return res.send('操作失败')
    } catch (err) {
        console.log(err)
        return res.send(err)
    } finally { }
}