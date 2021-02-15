import {combineReducers} from 'redux'
import {GET_DATA, SET_DATA} from './../actions'
import Users from './../Users.json'

const initialState = {data: []};

const informationData = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, data: Users};

        case SET_DATA:
            return {...state, data: [...action.data]};

        default:
            return state
    }
};

const helloReducer = combineReducers({
    informationData
});

export default helloReducer;
