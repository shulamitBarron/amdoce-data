import {connect} from 'react-redux'
import Home from './../components/Home'
import {getData} from './../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
};

const HomePage = connect(
    () => {},
    mapDispatchToProps
)(Home);

export default HomePage;
