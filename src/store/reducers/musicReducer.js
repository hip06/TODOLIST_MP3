import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null
            }

        default:
            return state
    }
}

export default musicReducer