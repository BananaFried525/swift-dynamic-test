const jwt = require('jsonwebtoken');
const config = require('../bin/config');

exports.verifyToken = (req, res, next) => {
    const _config = config.getConfig(process.env.NODE_ENV);
    const bearerToken = req.headers['authorization'];
    try {
        if (bearerToken != undefined) {
            const token = bearerToken.split(' ')[1];
            const verify = jwt.verify(token,_config.sctK);
            req.user = verify;
            next();
        } else {
            res.status(401).json("unauthorized");
        }
    } catch (error) {
        res.status(401).json("unauthorized");
    }
}