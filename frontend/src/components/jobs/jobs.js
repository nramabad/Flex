import React from "react";

class Jobs extends React.Component {
  componentWillMount() {
    this.props.fetchJobs();
  }

  render() {
    return (
      <div>
          Jobs
      </div>
    );
  }
}

export default Jobs;