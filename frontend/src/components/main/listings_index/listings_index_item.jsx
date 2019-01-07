import React from 'react';
const stringSimilarity = require("string-similarity");

class ListingsIndexItem extends React.Component {


  render() {
    return <div className="listings-index-item-container">
        <div className="listings-index-item-left">
          <div className="index-item-job-title">{this.props.title}</div>
          <div className="index-item-company">{this.props.company}</div>
          <div className="index-item-location">{this.props.location}</div>
        </div>
        <div className="listings-index-item-right">
          <div className="index-item-match-percentage">
            {(stringSimilarity.compareTwoStrings(
              this.props.description,
              this.props.currentResume
          ) * 100).toFixed(1)}
            %
          </div>
          <div className="index-item-match-text">match</div>
        </div>
      </div>;
  }
}

export default ListingsIndexItem;