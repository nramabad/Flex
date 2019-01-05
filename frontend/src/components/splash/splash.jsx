import React from 'react';

class SplashPage extends React.Component {

  render() {
    return (
      <div id="splash-page-container">
        <div id="splash-page-content">
          <div className="splash-page-content-item" id="splash-title">
            FlexJobs
          </div>
          <div className="splash-page-content-item" id="splash-subtitle">
            Job searching made easy.
          </div>
          <div className="splash-page-content-item" id="splash-try-button">Try now</div>
        </div>
      </div>
    );
  }
}

export default SplashPage;