import React from 'react';

class ListingDetails extends React.Component {

  render() {
    debugger;
    return (
      <div id="listing-details-container">
        <div id="listing-details-pane">
          <div id="details-cover-image"></div>
          <div>
            {this.props.job.date}<br></br>
            {this.props.job.jobCompany}<br></br>
            {this.props.job.jobCompanyLogo}<br></br>
            {this.props.job.jobCompanyUrl}<br></br>
            {this.props.job.jobCreatedAt}<br></br>
            {this.props.job.jobDescription}<br></br>
            {this.props.job.jobHowToApply}<br></br>
            {this.props.job.jobLocation}<br></br>
            {this.props.job.jobTitle}<br></br>
            {this.props.job.jobType}<br></br>
            {this.props.job.jobKeywords}<br></br>
            {this.props.job.jobKeyphrases}<br></br>
            {this.props.job.jobUrl}<br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDetails;
