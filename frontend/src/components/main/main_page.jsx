import React from 'react';
import ListingsIndexContainer from "./listings_index/listings_index_container";
import ListingDetailsContainer from "./listing_details/listing_details_container";
import NavBar from '../nav/navbar.jsx';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
<<<<<<< HEAD
        this.props.fetchJobs()
        this.props.fetchUserResumes(this.props.user.id)
=======
        this.props.fetchJobs();
>>>>>>> e13768bac73a6d5f7ba514b2416649e9d49d8a2b
    }

    render() {
        return (
            <div className="stretch-container">
                <div id="main-page-container">
                    <NavBar />
                    <div id="main-container">
                        <ListingsIndexContainer />
                        <ListingDetailsContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;