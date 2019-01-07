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
    if (this.props.jobs[0].jobsDescription === "" || this.props.currentResume === "" || this.props.jobs.length <= 1) {
      return( 
        <div id="listings-index-container">
          <div id="listings-index-header">
            Fetching jobs...
          </div>
        </div>
      );
    } else {
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
              resumeMatch={job.resumeMatch}
            />
          ))}
        </div>;
    }


    
  }
}

export default ListingsIndex;