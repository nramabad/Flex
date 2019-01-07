# FlexJobs

### FlexJobs matches candidates with job opportunities by generating keywords and sentiment analysis from user-uploaded resumes and job listings. 

## Background and Overview

Finding jobs based on both matched skills and culture fit can be difficult. FlexJobs uses keyword matching and sentiment analysis to create a list of best-fit job postings that matches the user’s resume. 

This problem decomposes into several areas of activity:
  * Generate keyword topics from resumes and job listings   
  * Generate sentiments from resumes and job listings 
  * Implement a front-end interface with which users can view the results of our work 

## Functionality & MVP

   - [X] User Auth
   - [X] Users can paste in their resume in raw text format  
   - [X] Compare resume and job listing and return matches using string comparison
   - [X] Extract keyword with NLI for boolean query of resume/job listing

#### Bonus Features

   - [ ] Users will also get matches based on sentiment analysis of resume and job listings
   - [ ] Extracting text from other document formats 
   - [ ] Recruiter upload job listings and receive best fit candidates
   - [ ] Word map to display relational information between resume and listing keywords

## Technologies & Technical Challenges
  ##### Backend: MongoDB, Express.js 
  ##### Frontend: React, Node.js

#### Scoring text data with Intellexer Comparator


#### Extract keywords from text data 
  + ##### Enable boolean query of resumes and listings


#### UX
  + ##### Frontend Interface
	List of listings ordered by comparator score
	Word map
	Keyword match count
	Spell checker on your resume

  + ##### Backend


## Accomplished over the Weekend
 - Researched and identified our key API's that will be used for job postings, keyword matching, and sentiment analysis 
 
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
  - [ ] After User Auth frontend/backend: Get heroku set up **Christina**
  - [X] Test API (GitHub) calls with backend **George & Adi** 

### Day 3 Fri 1/4
  - [X] Exploring the model and npm packages **Nav** 
  - [ ] User resume frontend component **Adi** 
  - [ ] Job listings frontend component **Christina** 
  - [X] Backend queries to render for frontend components **George** 

### Day 4 and 5 
  - [X] Catch up on incomplete tasks from Days 1-3 **Everyone**

### Day 6 Mon 1/7
  - [ ] Frontend components **Nav & Adi**
  - [ ] CSS **George & Christina** 

### Day 7 Tues 1/8 
  - [ ] Add readme **Adi**
  - [ ] improve UX **Christina & George**
  - [ ] Fix bugs **Everyone**

