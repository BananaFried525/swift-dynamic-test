const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const reportService = require('../services/report.service');
const config = require('../bin/config');
const validate = require('../utils/validate');

exports.login = async (req, res) => {
    const _config = config.getConfig(process.env.NODE_ENV);
    const { userName, password, repeatPassword } = req.body;
    try {
        const validateBody = await validate.userValidate({ userName, password, repeatPassword });
        if (validateBody.error != undefined) {
            return res.status(400).json({
                resultData: {},
                resultMessage: "invalid username or password"
            })
        }
        const respUser = await userService.findUser({ userName, password });
        const payload = { userName: respUser.userName, role: respUser.role, refId: respUser.refId };
        const token = jwt.sign(payload, _config.sctK, { expiresIn: _config.tokenExp });
        res.status(200).json({ data: { token } });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.approveReport = async (req, res) => {
    const { reportName } = req.body;
    const user = req.user;
    try {
        const report = await reportService.findOneByName(reportName);
        if (report != undefined) {
            for (let i = 0; i < report.owner.length; i++) {
                if (report.owner[i].refId == user.refId && report.owner[i].isApprove == false) {
                    report.owner[i].isApprove = true
                    break;
                } else if (report.owner[i].refId == user.refId && report.owner[i].isApprove == true) {
                    return res.status(400).json({
                        resultMessage: "already approve",
                        resultData: {}
                    })
                }
            }
            await reportService.updateApprove(report);
            const approveAll = report.owner.every(e => e.isApprove == true);
            res.status(200).json({
                resultMessage: "success",
                resultData: {}
            });
            
            if (approveAll) {
                await reportService.reportNotification(report, 'newscontrol6@gmail.com');
            }

        } else {
            return res.status(404).json({
                resultMessage: "not found report",
                resultData: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
