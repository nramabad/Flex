import React from 'react';
import ListingsIndexItem from "./listings_index_item";

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs
    }
  }


  render() {
    if (this.props.jobs === undefined || this.props.jobs.length === 0 || this.props.currentResume === undefined) {
      return( 
        <div id="listings-index-container">
          <div id="listings-index-header">
            Fetching jobs...
          </div>
        </div>
      );
    } else {
      debugger
      return <div id="listings-index-container">
          <div id="listings-index-header">
            Displaying your {this.props.jobs.length} daily job listings
          </div>
          {this.props.jobs.map(job => (
            <ListingsIndexItem
              key={job.jobId}
              title={job.jobTitle}
              company={job.jobCompany}
              location={job.jobLocation}
              description={job.jobDescription}
              currentResume={this.props.currentResume.text}
            />
          ))}
        </div>;
    }


    
  }
}

export default ListingsIndex;