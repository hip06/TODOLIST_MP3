import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    friday: {},
    newEveryday: {},
    top100: {},
    xone: {},
    newMusic: [],
    isLoading: false,
    newRelease: {},
    weekChart: [],
    favoritedArtist: {},
    chart: {},
    rank: []

}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null,
                friday: action.homeData?.find(item => item.sectionId === 'hAutoTheme1') || {},
                newEveryday: action.homeData?.find(item => item.sectionId === 'hAutoTheme2') || {},
                top100: action.homeData?.find(item => item.sectionId === 'h100') || {},
                xone: action.homeData?.find(item => item.sectionId === 'hXone') || {},
                newMusic: { ...action.homeData?.find(item => item.sectionId === 'hAlbum'), title: 'Nhạc mới' } || {},
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || {},
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart')?.items || [],
                favoritedArtist: action.homeData?.find(item => item.sectionId === 'hMix') || {},
                chart: action.homeData?.find(item => item.sectionId === 'hZC')?.chart || {},
                rank: action.homeData?.find(item => item.sectionId === 'hZC')?.items || [],
            }
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }

        default:
            return state
    }
}

export default appReducer