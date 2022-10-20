import actionTypes from "../actions/actionTypes";

const initState = {
    homeData: [],
    test: 'Hello 123'
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state

        default:
            return state
    }
}

export default appReducer