
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateResumeInput(data) {
    let errors = {};


    data.text = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 50, max: 38380 })) {
        errors.text = 'Resume/CV must be between 50 and 38380 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};