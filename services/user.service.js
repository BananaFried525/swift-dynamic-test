const userModel = require('../models/user.model');

exports.findUser = (userData) => {
    return userModel.findOne(userData);
}