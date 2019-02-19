# FlexJobs

### FlexJobs matches candidates with job opportunities by generating keywords and comparing similarities from user-uploaded resumes and job listings. 

Simply upload a resume and FlexJobs will automatically rank the open positions on Github Jobs that match best with the provided resume.

[Live Link](https://flexjobs.herokuapp.com)

## Background and Overview

Finding jobs can be difficult. FlexJobs uses keyword matching and string similarity to create a list of best-fit job postings (pulled from the Github Jobs API) that matches the user’s resume.

This problem decomposes into several areas of activity:
  * Generate keyword topics from resumes and job listings   
  * Comparing string similarity from resume and job listings 
  * Implement a front-end interface with which users can view the results of our work 
  
FlexJobs was built in a single week.

## Technologies & Technical Challenges
  ##### Backend: MongoDB, Express.js 
  ##### Frontend: React, Node.js
Additional packages and libraries: Material UI, String Similarity, Unified (NLP), HTML Canvas, and GitHub Jobs API. String Similarity and Unified were both used for text analysis. The word clouds are generated using canvas on HTML. Jobs were pulled from the GitHub Jobs API. 
 
## Group Members
**Christina Chu**,
[George Wang](https://github.com/guanw88),
**Adi Kantawala**,
**Navaneet Ramabadran**
