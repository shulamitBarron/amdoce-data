export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';

export const getData = () => {
    return {
        type: GET_DATA
    }
};

export const setData = (users) => {
    return {
        type: SET_DATA,
        data: users
    }
};
