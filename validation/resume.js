
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateResumeInput(resumeString) {
    let errors = {};


    resumeString = validText(resumeString) ? resumeString : "";

    if (!Validator.isLength(resumeString, { min: 50, max: 38380 })) {
      errors.text = "Resume/CV must be between 50 and 38380 characters";
    }

    if (Validator.isEmpty(resumeString)) {
      errors.text = "Text field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};