import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const getHome = () => async (dispatch) => {
    try {
        const response = await apis.getHome()

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: response.data.data.items
            })
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null
        })
    }
}