const express = require("express");
const router = express.Router();
const request = require('request');

router.get("/test", (req, res) => res.json({ msg: "This is the jobs route" }));

router.get('/github', (req, res) => {
    res.json({ msg: "Starting API call..." });
    request("https://jobs.github.com/positions.json?location=sf", function(
      error,
      response,
      body
    ) {
        if (response && response.statusCode == 200) {
            console.log("body:", body); // Print the Github jobs as a JSON.
        } else {
            console.log("error:", error); // Print the error if one occurred
            console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        }
    });
});

module.exports = router;
