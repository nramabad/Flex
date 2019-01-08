const express = require("express");
const router = express.Router();
const request = require('request');
const mongoose = require('mongoose');
const retext = require("retext");
const keywords = require("retext-keywords");
const Job = require("../../models/Job");
const User = require("../../models/User")
const toString = require("nlcst-to-string");
const passport = require("passport");



// router.get("/jobs",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//     console.log("test")
//     debugger
//     Job.find()
//         .sort({ date: -1 })
//         .then(resumes => res.json(resumes))
//         .catch(err => res.status(404).json({ noresumesfound: "No resumes found" }));
// });




// 



// const JobScore 



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

// .sort()

// With authentication required
// router.get('/',
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//     Job.find()
//         .then(jobs => res.json(jobs))
// });

// No authentication required
router.get('/',
    (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs));
});

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
    var words = []
    var phrases = []

    
    jsonArray.forEach( (job, idx) => {


        Job.find(
            { jobId: job.id },
            (err, docs) => {
                if (docs.length) {
                } else {

               
                    const done = (err, file) => {
                        if (err) throw err
                        const stringify = val => (toString(val))
       
                        words = file.data.keywords.map(keyword => toString(keyword.matches[0].node));
                        phrases = file.data.keyphrases.map( keyphrase => keyphrase.matches[0].nodes.map(stringify).join(''));
            
                    }

                    const description = job.description.replace(/\\n|<[^>]*>/ig, "");
       
                    retext()
                      .use(keywords)
                      .process(description, done);

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
                        jobCompanyLogo: job.company_logo,
                        jobKeywords: words,
                        jobKeyphrases: phrases
                    });
     
                    newJob.save();
                }
            }
            )
        });
}

module.exports = router;



