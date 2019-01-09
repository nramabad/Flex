import React from 'react';

class ListingsIndexItem extends React.Component {

  componentDidMount() {
    let divs = document.querySelectorAll(".listings-index-item-container");
    for (let i = 0; i < divs.length; i++) {
      setTimeout(() => {
        divs[i].classList.add("slide-animation-left");
      }, 250 * i + 400);
    }
  }

  handleClick(jobId) {
    return (e) => {
      e.preventDefault();
      this.props.history.push(`/home/${jobId}`);
    };
  }

  render() {
    return <div onClick={this.handleClick(this.props.jobId)} className="listings-index-item-container">
        <div className="listings-index-item-left">
          <div className="index-item-job-title">{this.props.title}</div>
          <div className="index-item-company">{this.props.company}</div>
          <div className="index-item-location">{this.props.location}</div>
        </div>
        <div className="listings-index-item-right">
          <div className="index-item-match-percentage">
            {this.props.resumeMatch.toFixed(1)}
            %
          </div>
          <div className="index-item-match-text">match</div>
        </div>
      </div>;
  }
}

export default ListingsIndexItem;