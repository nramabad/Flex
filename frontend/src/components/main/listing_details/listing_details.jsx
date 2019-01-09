import React from 'react';
import CloudDetail from './cloud_detail';
import JobsReducer from '../../../reducers/jobs_reducer';

class ListingDetails extends React.Component {

  switchView() {
    let divs = document.querySelectorAll("#listing-details-container");
    for (let i = 0; i < divs.length; i++) {
      setTimeout(() => {
        divs[i].classList.add("slide-animation-bottom");
      }, 250 * i + 400);
    }
  }

  render() {
    if (this.props.match.params.jobId === undefined || this.props.job === "") {
      return (
        <div id="listing-details-container">
          <div id="listing-details-pane-home">
            Click on the job listing to see details.
          </div>
        </div>
      );
      // } else if (this.props.match.params.analysis === "analysis") {
      //   return (
      //     <div id="listing-details-container">
      //       <div id="listing-details-pane-analysis">
      //         <div id="details-analysis-toggle" onClick={() => this.props.history.push(`/home/${this.props.job.jobId}`)}>
      //           <span>Back to listing</span>
      //         </div>
      //         Analysis Page<br></br>
      //         {this.props.job.resumeMatch}
      //       </div>
      //     </div>
      //   );
    } else {
      { this.switchView() }
      let content, toggleText, toggleUrl;
      let words = [];
      if (this.props.match.params.analysis === "analysis") {
        this.props.job.jobKeyphrases
          .concat(this.props.job.jobKeywords)
          .forEach(word => {
            if (words.indexOf(word) === -1) {
              words.push(word);
            }
          });
        content = (
          <CloudDetail words={words} weight={this.props.job.phraseWeight} />
        );
        toggleText = "Back to Listing";
        toggleUrl = `/home/${this.props.job.jobId}`;
      } else {
        content = (
          <div>
            <div
              id="details-job-description"
              dangerouslySetInnerHTML={{
                __html: this.props.job.jobDescription
              }}
            />
            <div
              id="details-job-apply"
              dangerouslySetInnerHTML={{ __html: this.props.job.jobHowToApply }}
            />
          </div>
        );
        toggleText = "Match Analysis";
        toggleUrl = `/home/${this.props.job.jobId}/analysis`;
      }

      return (
        <div id="listing-details-container">
          <div id="listing-details-pane">
            <div id="details-analysis-toggle">
              <span onClick={() => this.props.history.push(toggleUrl)}>
                {toggleText}
              </span>
            </div>
            {this.props.job.jobCompanyLogo !== null ? (
              <div id="listing-details-logo-container">
                <img
                  id="listing-details-logo"
                  src={this.props.job.jobCompanyLogo}
                  alt="company-logo"
                />
              </div>
            ) : (
              ""
            )}
            <div id="listing-details-content">
              <div id="listing-details-content-header">
                <div id="listing-details-type-location">
                  <div
                    id="details-job-type"
                    dangerouslySetInnerHTML={{ __html: this.props.job.jobType }}
                  />
                  &nbsp;/&nbsp;
                  <div
                    id="details-job-location"
                    dangerouslySetInnerHTML={{
                      __html: this.props.job.jobLocation
                    }}
                  />
                </div>
                <h1>
                  <div
                    id="details-job-title"
                    dangerouslySetInnerHTML={{
                      __html: this.props.job.jobTitle
                    }}
                  />
                </h1>
                <a href={this.props.job.jobCompanyUrl}>
                  <div
                    id="details-job-company"
                    dangerouslySetInnerHTML={{
                      __html: this.props.job.jobCompany
                    }}
                  />
                </a>
              </div>
              {content}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ListingDetails;
