// routes/api/resumes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Resume = require('../../models/Resume');
const validateResumeInput = require('../../validation/resumes');


router.get("/test", (req, res) => res.json({ msg: "This is the jobs route" }));

router.get('/', (req, res) => {
    Resume.find()
        .sort({ date: -1 })
        .then(resumes => res.json(resumes))
        .catch(err => res.status(404).json({ noresumesfound: 'No resumes found' }));
});

router.get('/user/:user_id', (req, res) => {
    Resume.find({ user: req.params.user_id })
        .then(resumes => res.json(resumes))
        .catch(err =>
            res.status(404).json({ noresumesfound: 'No resumes found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Resume.findById(req.params.id)
        .then(resume => res.json(resume))
        .catch(err =>
            res.status(404).json({ noresumefound: 'No resume found with that ID' })
        );
});

// FIX THIS LATER

// router.post('/resume',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         const { errors, isValid } = validateResumeInput(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//         const newResume = new Resume({
//             text: req.body.text,
//             user: req.user.id
//         });

//         newResume.save().then(resume => res.json(resume));
//     }
// );

module.exports = router;