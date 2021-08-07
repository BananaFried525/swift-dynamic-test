const mongoose = require('mongoose');
const userModel = require('../models/user.model');
const reportModel = require('../models/report.model');
const { getConfig } = require('./config');

module.exports = async () => {
    const _config = getConfig(process.env.NODE_ENV);
    try {
        let url = `mongodb://${_config.db.host}:${_config.db.port}/${_config.db.name}`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to: ${_config.db.host}:${_config.db.name}`);

        await userModel.deleteMany();
        await reportModel.deleteMany();

        const user1 = new userModel({
            userName: 'user1',
            password: 'user1ABC',
            role: 'ADMIN',
            refId: 1
        });

        const user2 = new userModel({
            userName: 'user2',
            password: 'user2ABC',
            role: 'ADMIN',
            refId: 2
        });

        const user3 = new userModel({
            userName: 'user3',
            password: 'user3ABC',
            role: 'ADMIN',
            refId: 3
        });

        await user1.save();
        await user2.save();
        await user3.save();

        const report = new reportModel({
            name: 'report1',
            owner: [
                {
                    refId: 1,
                    isApprove: false
                }, {
                    refId: 2,
                    isApprove: false
                }, {
                    refId: 3,
                    isApprove: false
                }
            ]
        });

        await report.save();

    } catch (error) {
        console.log(error);
    }
}
