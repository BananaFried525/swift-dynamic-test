const joi = require('joi');

exports.userValidate = ({ userName, password, repeatPassword }) => {
    const schema = joi.object({
        userName: joi.string()
            .required(),
        password: joi.string()
            .required(),
        repeatPassword: joi.ref('password')
    });

    return schema.validate({ userName, password, repeatPassword })
}