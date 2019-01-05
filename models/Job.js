const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'users'
    // },
    jobId: {
        type: String,
        required: true
    },
    jobType: {
        type: String
    },
    jobUrl: {
        type: String
    },
    jobCreatedAt: {
        type: Date
    },
    jobCompany: {
        type: String
    },
    jobCompanyUrl: {
        type: String
    },
    jobLocation: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobHowToApply: {
        type: String,
    },
    jobCompanyLogo: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Job = mongoose.model('job', JobSchema);