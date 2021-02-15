import {connect} from 'react-redux'
import Data from './../components/Data'
import {getData, setData} from './../actions'

const mapStateToProps = (state) => {
    return {
        data: state.informationData.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getData())
        },

        setData: (users) => {
            dispatch(setData(users))
        }
    }
};

const DataPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);

export default DataPage;
