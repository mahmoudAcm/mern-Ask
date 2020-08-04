import { combineReducers } from 'redux';

const updateOnlineStatusReducer = (state = {}, action) => {
    switch(action.type){
        default: return state;
    }
}

const GetProfileReducer = (state = {status: "nothing"}, action) => {
    switch(action.type){
        case 'profile/fetchProfile':
            return {
                ...state,
                status: action.status
            }
        case 'profile/ProfileLoaded':
            return {
                ...state,
                status: action.status,
                profile: action.data.profile
            }    
        default: return state;
    }
}

export default combineReducers({
    updateOnlineStatusReducer,
    userProfile: GetProfileReducer
});