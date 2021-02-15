import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap'
import '../indexList.css';
import amdocs_logo from '../pictures/amdocs_logo.jpg'
import {Link} from "react-router-dom";

// if the data will get from api .. we must do loading
export function Loading() {
    return (
        <Col className='loadingWrapper'>
            <div className='loading'>
                <span className='oLoading'/>
            </div>
        </Col>
    )
}

const Home = ({getData}) => {
    const onGetClick = () => {
        getData();
    };

    return (
        <div>
            <Link className="data-link" onClick={onGetClick} to={"/Data"}>Show all users</Link> &nbsp;
            <img className="home-page" src={amdocs_logo} alt="Trulli"/>
        </div>
    )
};

Home.propTypes = {
    getData: PropTypes.func.isRequired,
};

export default Home;
