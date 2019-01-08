import React from 'react';
import NavBar from '../../nav/navbar.jsx';

class AboutPage extends React.Component {

  render() {
    return (
      <div className="stretch-container">
        <div id="main-page-container">
          <NavBar />
          <div id="main-container">
            <div id="about-container">
              <section id="about-project-section">
                <h1>About The Project</h1>
                FlexJobs is a demonstration project created using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </section>
              <section id="about-team-section">
                <h1>Team Members</h1>
                <div id="team-profiles">
                  <div className="team-profile-box">
                    <h3>Adi Kantawala</h3>
                    <div className="profile-links">
                      <div className="profile-link-icon" id="github-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="439" height="439" viewBox="0 0 438.5 438.5"><path d="M158.2 352.6c-3 0.6-4.4 2-4 4.3 0.4 2.3 2.1 3 5.1 2.3 3-0.8 4.4-2.1 4-4C162.9 353.1 161.2 352.2 158.2 352.6z" /><path d="M141.9 354.9c-3 0-4.6 1-4.6 3.1 0 2.5 1.6 3.5 4.9 3.1 3 0 4.6-1 4.6-3.1C146.8 355.6 145.1 354.5 141.9 354.9z" /><path d="M119.6 354c-0.8 2.1 0.5 3.5 3.7 4.3 2.9 1.1 4.7 0.6 5.4-1.7 0.6-2.1-0.7-3.6-3.7-4.6C122.2 351.3 120.4 351.9 119.6 354z" /><path d="M414.4 24.1C398.3 8 379 0 356.3 0H82.2C59.6 0 40.2 8 24.1 24.1 8 40.2 0 59.6 0 82.2v274.1c0 22.7 8 42 24.1 58.1 16.1 16.1 35.5 24.1 58.1 24.1h64c4.2 0 7.3-0.1 9.4-0.4 2.1-0.3 4.2-1.5 6.3-3.7 2.1-2.2 3.1-5.4 3.1-9.6 0-0.6 0-7-0.1-19.4 -0.1-12.4-0.1-22.2-0.1-29.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.9l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1s11.7-0.5 16.3-1.4c4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.7-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4 18.8 0 37.1 2.5 54.8 7.4l10.8-6.9c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.8-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v68.2c0 3.2 0.5 5.9 1.4 7.9 1 2 2.5 3.4 4.6 4.1 2.1 0.8 3.9 1.2 5.6 1.4 1.6 0.2 3.9 0.3 7 0.3h64c22.6 0 42-8 58.1-24.1 16.1-16.1 24.1-35.5 24.1-58.1V82.2C438.5 59.6 430.5 40.2 414.4 24.1z" /><path d="M86.8 319.2c-1.3 0.9-1.1 2.5 0.6 4.6 1.9 1.9 3.4 2.2 4.6 0.9 1.3-0.9 1.1-2.5-0.6-4.6C89.5 318.3 87.9 318 86.8 319.2z" /><path d="M77.4 312.1c-0.6 1.3 0.1 2.5 2 3.4 1.5 1 2.8 0.8 3.7-0.6 0.6-1.3-0.1-2.5-2-3.4C79.2 310.9 77.9 311.1 77.4 312.1z" /><path d="M95.6 330.3c-1.7 0.9-1.7 2.7 0 5.1 1.7 2.5 3.3 3.1 4.9 2 1.7-1.3 1.7-3.1 0-5.4C99 329.6 97.4 329 95.6 330.3z" /><path d="M105.6 343.2c-1.7 1.5-1.3 3.3 1.1 5.4 2.3 2.3 4.2 2.6 5.7 0.8 1.5-1.5 1.1-3.3-1.1-5.4C109.1 341.8 107.2 341.5 105.6 343.2z" /></svg>
                      </div>
                      <div className="profile-link-icon" id="linkedin-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382"><path d="M347.4 0H34.6C15.5 0 0 15.5 0 34.6v312.9C0 366.5 15.5 382 34.6 382h312.9C366.5 382 382 366.5 382 347.4V34.6C382 15.5 366.5 0 347.4 0zM118.2 329.8c0 5.6-4.5 10.1-10.1 10.1H65.3c-5.6 0-10.1-4.5-10.1-10.1V150.4c0-5.6 4.5-10.1 10.1-10.1h42.8c5.6 0 10.1 4.5 10.1 10.1V329.8zM86.7 123.4c-22.5 0-40.7-18.2-40.7-40.7S64.3 42.1 86.7 42.1s40.7 18.2 40.7 40.7S109.2 123.4 86.7 123.4zM341.9 330.7c0 5.1-4.1 9.2-9.2 9.2H286.7c-5.1 0-9.2-4.1-9.2-9.2v-84.2c0-12.6 3.7-55-32.8-55 -28.3 0-34.1 29.1-35.2 42.1v97.1c0 5.1-4.1 9.2-9.2 9.2h-44.4c-5.1 0-9.2-4.1-9.2-9.2V149.6c0-5.1 4.1-9.2 9.2-9.2h44.4c5.1 0 9.2 4.1 9.2 9.2v15.7c10.5-15.8 26.1-27.9 59.3-27.9 73.6 0 73.1 68.7 73.1 106.5L341.9 330.7 341.9 330.7z" fill="#0077B7"/></svg>                      
                      </div>                      
                    </div>
                  </div>
                  <div className="team-profile-box">
                    <h3>Christina Chu</h3>
                  </div>
                  <div className="team-profile-box">
                    <h3>George Wang</h3>
                  </div>
                  <div className="team-profile-box">
                    <h3>Navaneet Ramabadran</h3>
                  </div>
                </div>
              </section>
              <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;