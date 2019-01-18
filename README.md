# FlexJobs

### FlexJobs matches candidates with job opportunities by generating keywords and comparing similarities from user-uploaded resumes and job listings. [Demo Now!](https://flexjobs.herokuapp.com)

## Background and Overview

Finding jobs can be difficult. FlexJobs uses keyword matching and string similarity to create a list of best-fit job postings that matches the user’s resume. 

This problem decomposes into several areas of activity:
  * Generate keyword topics from resumes and job listings   
  * Comparing string similarity from resume and job listings 
  * Implement a front-end interface with which users can view the results of our work 

## Functionality & MVP

   - [X] User Auth
   - [X] Users can paste in their resume in raw text format  
   - [X] Compare resume and job listing and return matches using string comparison
   - [X] Extract keyword with NLI for boolean query of resume/job listing

#### Bonus Features

   - [X] Word map to display relational information between resume and listing keywords

## Technologies & Technical Challenges
  ##### Backend: MongoDB, Express.js 
  ##### Frontend: React, Node.js
Additional packages and libraries: Material UI, String Similarity, Unified (NLP), HTML Canvas, and GitHub Jobs API. String Similarity and Unified were both used for text analysis. The word clouds are generated using canvas on HTML. Jobs were pulled from the GitHub Jobs API. 


## Accomplished over the Weekend
 - Researched and identified our key API's that will be used for job postings, keyword matching, and string similarity.
 
## Group Members & Work Breakdown

**Christina Chu**,
**George Wang**,
**Adi Kantawala**,
**Navaneet Ramabadran**


### Day 1 Wed 1/2
  - [X] mLab setup **Christina** 
  - [X] User Auth **Nav**
  - [X] Research APIs **George**  
  - [X] Frontend routes and components **Christina** 
  - [X] Wireframe and design for website **Everyone** 
  - [X] Backend -- Resumes, Job Listing -- models, validations **George & Adi** 

### Day 2 Thu ⅓
  - [X] Basic frontend with buttons and space to paste resume, skeleton for results **Nav**  
  - [X] After User Auth frontend/backend: Get heroku set up **Nav**
  - [X] Test API (GitHub) calls with backend **George & Adi** 

### Day 3 Fri 1/4
  - [X] Exploring the model and npm packages **Nav** 
  - [X] User resume frontend component **Adi** 
  - [X] Job listings frontend component **Christina** 
  - [X] Backend queries to render for frontend components **George** 

### Day 4 and 5 
  - [X] Catch up on incomplete tasks from Days 1-3 **Everyone**

### Day 6 Mon 1/7
  - [X] Frontend components **Nav & Adi**
  - [X] CSS **George & Christina** 

### Day 7 Tues 1/8 
  - [X] Add ReadMe **Adi**
  - [X] Improve UX **Christina & George**
  - [X] Fix bugs **Everyone**

