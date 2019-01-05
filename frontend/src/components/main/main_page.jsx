import React from 'react';
import ListingsIndexContainer from "./listings_index/listings_index_container";
import ListingDetailsContainer from "./listing_details/listing_details_container";
import NavBar from '../nav/navbar.jsx';

class MainPage extends React.Component {

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