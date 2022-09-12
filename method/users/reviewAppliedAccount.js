const { appliedAccountsModel } = require('../../schema/appliedAccounts')
const { userModel } = require('../../schema/users')
const { userBckModel } = require('../../schema/userBcks')
const stringRandom = require('string-random')
module.exports = async function (req, res, next) {
    // 鉴权,管理员 ,通过身份证判断
    // reject 拒绝  allow 通过
    try {
        const { IDNumber, role, doMethod, type, email } = req.body
        // 判断 找回密码还是申请账号
        if (type === 'recall') {
            // 判断 允许还是拒绝
            if (doMethod === 'allow') {
                const findRes = await userModel.findOne({ IDNumber })
                // 发邮箱或短信告诉使用者
                return res.json({
                    code: 1,
                    message: `密码已发送至邮箱${email}`,
                    result: {}
                })
            }
            if (doMethod === 'reject') {
                return res.json({
                    code: 1,
                    message: `拒绝通知已发送至邮箱${email}`,
                    result: {}
                })
            }
            return res.json({
                code: 0,
                message: "invalid request",
                result: req.body
            })
        }
        if (type === 'apply') {
            if (doMethod === 'allow') {
                const findRes = await userModel.findOne({ IDNumber })
                if (!findRes) {
                    // 创建用户
                    const { doMethod, type, ...form } = req.body
                    const [{ id: lastUserId }] = await userModel.find().sort({ id: -1 }).limit(1)
                    form["id"] = lastUserId + 1
                    form["account"] = `bzzx-${form.id.toString().padStart(3, '0')}`
                    const lastFourId = form.IDNumber.slice(-4)
                    form["password"] = `${stringRandom(3, { numbers: false })}-${lastFourId}`
                    // 临时使用，保存密码
                    await userBckModel.create(form)
                    const result = await userModel.create(form)
                    return res.json({
                        code: 1,
                        message: "创建成功",
                        result
                    })
                }
                return res.json({
                    code: 0,
                    message: "该身份证已使用过",
                    result: req.body
                })
            }
            if (doMethod === 'reject') {
                const delRes = await appliedAccountsModel.deleteOne({ IDNumber })
                if (delRes) {
                    return res.json({
                        code: 0,
                        message: "已拒绝，并删除了临时数据库",
                        result: delRes
                    })
                }
            }
            return res.json({
                code: 0,
                message: "invalid request",
                result: req.body
            })
        }

        return res.json({
            code: 0,
            message: "操作失败，请重试",
            result: req.body
        })
    } catch (err) {
        return res.json({
            code: 0,
            message: "失败",
            result: err
        })
    } finally { }
}