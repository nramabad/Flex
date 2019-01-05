const express = require("express");
const router = express.Router();
const request = require('request');
const mongoose = require('mongoose');

// const JobScore 
const Job = require("../../models/Job");


router.get("/test", (req, res) => res.json({ msg: "This is the jobs route" }));

// router.get('/user/:user_id', (req, res) => {
//     JobScore.find({ user: req.params.user_id })
//         .sort({ score: -1 })
//         .then(listings => res.json(listings))
//         .catch(err =>
//             res.status(404).json({ nolistingsfound: 'No listings found for that user' }
//             )
//         );
// });

router.get('/github', (req, res) => {
    request("https://jobs.github.com/positions.json", function(
        error,
        response,
        body
        ) {
        if (response && response.statusCode == 200) {
            saveJobsToDb(body);
            res.json({ msg: JSON.parse(body)[0] });
        } else {
            console.log("error:", error); // Print the error if one occurred
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        }
    });
}); 

const saveJobsToDb = (body) => {
    const jsonArray = JSON.parse(body);
    jsonArray.forEach( (job, idx) => {
        Job.find(
            { jobId: job.id },
            (err, docs) => {
                if (docs.length) {
                } else {
                    const newJob = new Job({
                        jobId: job.id,
                        jobType: job.type,
                        jobUrl: job.url,
                        jobCreatedAt: job.created_at,
                        jobCompany: job.company,
                        jobCompanyUrl: job.company_url,
                        jobLocation: job.location,
                        jobTitle: job.title,
                        jobDescription: job.description,
                        jobHowToApply: job.how_to_apply,
                        jobCompanyLogo: job.company_logo
                    });

                    newJob.save();
                }
            }
            )
        });
}

module.exports = router;
