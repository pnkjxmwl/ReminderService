const sender = require('../config/emailConfig')

const sendBasicEmail = async (mailfrom, mailto, mailSubject, mailBody) => {
    try {
        sender.sendMail({
            from: mailfrom,
            to: mailto,
            subject: mailSubject,
            text: mailBody
        })

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    sendBasicEmail
}