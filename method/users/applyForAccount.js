const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')

module.exports = async function (req, res, next) {
    try {
        const form = req.body
        console.log(form)
        const { IDNumber, type } = form
        if (!IDNumber || type !== "apply") {
            return res.json({
                code: 0,
                message: 'invalid request',
                result: type
            })
        }
        if (await userModel.findOne({ IDNumber })) {
            return res.json({
                code: 0,
                message: '该身份证已经使用过了',
                result: IDNumber
            })
        }
        if (await appliedAccountsModel.findOne({ IDNumber })) {
            return res.json({
                code: 0,
                message: '该用户已经正在申请了，请等待管理员审核',
                result: IDNumber
            })
        }
        const result = await appliedAccountsModel.create(form)
        return res.json({
            code: 1,
            message: "申请账号成功",
            result
        })
    } catch (err) {
        console.log(err)
        return res.json({
            code: 1,
            message: "失败",
            result: err
        })
    } finally { }
}