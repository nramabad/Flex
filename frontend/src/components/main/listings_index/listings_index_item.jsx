import React from 'react';

class ListingsIndexItem extends React.Component {

  render() {
    return (
      <div className="listings-index-item-container">
        <div className="listings-index-item-left">
          <div className="index-item-job-title">Job Title</div>
          <div className="index-item-company">Great Company</div>
          <div className="index-item-location">San Francisco Bay Area, CA</div>
        </div>
        <div className="listings-index-item-right">
          <div className="index-item-match-percentage">87%</div>
          <div className="index-item-match-text">match</div>
        </div>
      </div>
    );
  }
}

export default ListingsIndexItem;