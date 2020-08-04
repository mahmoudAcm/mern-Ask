import store from '../stores/askStore';
const getProfile = () => {
    store.dispatch(async (dispatch) => {
        dispatch({
            type: 'profile/fetchProfile',
            status: 'fetching'
        });
        const res = await fetch('http://localhost:3001/User/5f20084c861f041884d1462a', {
            headers:{
                'Content-Type': 'application/json'
            }
        }); 
        
        res.json().then((data) => {
                dispatch({
                    type: 'profile/ProfileLoaded',
                    status: 'ok',
                    data
                });
        });
    });
};


export {getProfile};