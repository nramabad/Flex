import React from 'react';

class ListingDetails extends React.Component {

  render() {
    if (this.props.match.params.jobId === undefined) {
      return (
        <div id="listing-details-container">
          <div id="listing-details-pane-home">
            Click on the job listing to see details.
          </div>
        </div>
        );
    } else {
      return (
      <div id="listing-details-container">
        <div id="listing-details-pane">
          {(this.props.job.jobCompanyLogo !== null) ? 
            ( <div id="listing-details-logo-container">
                <img id="listing-details-logo" src={this.props.job.jobCompanyLogo} />
              </div>  ) : "" }
          <div id="listing-details-content">
            <div id="listing-details-content-header">
              <div id="listing-details-type-location">
                <div id="details-job-type" dangerouslySetInnerHTML={{"__html": this.props.job.jobType}} />
                &nbsp;/&nbsp; 
                <div id="details-job-location" dangerouslySetInnerHTML={{"__html": this.props.job.jobLocation}} />              
              </div>
              <h1>
                <div id="details-job-title" dangerouslySetInnerHTML={{"__html": this.props.job.jobTitle}} /> 
              </h1>
              <a href={this.props.job.jobCompanyUrl}> 
                <div id="details-job-company" dangerouslySetInnerHTML={{"__html": this.props.job.jobCompany}} />
              </a>
            </div>

            <div id="details-job-description" dangerouslySetInnerHTML={{"__html": this.props.job.jobDescription}} />
            <div id="details-job-apply" dangerouslySetInnerHTML={{"__html": this.props.job.jobHowToApply}} />
          </div>
        </div>
      </div>
    )}
  }
}

export default ListingDetails;
