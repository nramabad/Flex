import React, { Component } from 'react'
import NavBar from "../nav/navbar";

export default class HowItWorks extends Component {
  render() {
    return <div>
        <NavBar />
        <div className="how-it-works-container">
          <div className="how-it-works-contents">
            <h1>How It Works</h1>
            <hr/>
            <ol className="how-it-works-items">
              <li className="how-it-works-item">
                <img className="how-it-works-image" alt="ImageUpload"src={require('../../images/iconmonstr-upload-20-240.png')} />
                <div className="how-it-works-item-heading">Step 1: Upload Resume</div>
              <div className="how-it-works-item-text">Flexjobs analyzes your resume and matches it against job postings from Github Jobs.<br /><br/>Get started in just 30 seconds!</div>
              </li>
              <li className="how-it-works-item">
                <img className="how-it-works-image" alt="ImageUpload" src={require('../../images/iconmonstr-monitoring-6-240.png')} />
                <div className="how-it-works-item-heading">Step 2: Get Ranked Matches</div>
              <div className="how-it-works-item-text">FlexJobs uses a scoring algorithm to rank job opportunities that compare favorably with your resume.<br/><br/>Save time by focusing on jobs that matter!</div>
              </li>
              <li className="how-it-works-item">
                <img className="how-it-works-image" alt="ImageUpload" src={require('../../images/iconmonstr-paper-plane-2-240.png')} />
                <div className="how-it-works-item-heading">Step 3: Apply!</div>
              <div className="how-it-works-item-text">FlexJobs updates your personalized match rankings whenever new jobs are posted.<br /><br/>Start applying today!</div>
              </li>
            </ol>
          </div>
        </div>
      </div>;
  }
}
