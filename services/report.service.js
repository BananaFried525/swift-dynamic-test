const reportModel = require('../models/report.model');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/report.model');
const config = require('../bin/config');

exports.findById = (id) => {
    return reportModel.findById(id);
}

exports.findOneAndUpdate = () => {
    return reportModel.findOneAndUpdate({
        name: 'report1'
    }, {
        owner: {
            refId: 1,
            isApprove: true
        }
    }
    );
}

exports.findOneByName = (name) => {
    return reportModel.findOne({ name });
}

exports.updateApprove = (report) => {
    return report.save();
}

exports.reportNotification = (report, receivers) => {
    const _config = config.getConfig(process.env.NODE_ENV);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: _config.mailer.email,
            pass: _config.mailer.pass
        }
    });

    let mailOption = {
        from:_config.mailer.email,
        to: receivers,
        subject: 'Approved report',
        html: `
            <b>Report: ${report.name} approved</b>
        `
    }

    return transporter.sendMail(mailOption);
}