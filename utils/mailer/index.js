const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function sendMail({ email, account, password }) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '616539774@qq.com', // generated ethereal user
            pass: 'ljlzgfpvhidwbgag', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"标准中心" <616539774@qq.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "您已成功申请了标准中心的账号", // Subject line
        // text: "这是账号和密码", // plain text body
        html: `<b>您的账号和密码是：</b>
               <p style="margin-auto">账号：${account}</p>
               <p style="margin-auto">密码：${password}</p>
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
