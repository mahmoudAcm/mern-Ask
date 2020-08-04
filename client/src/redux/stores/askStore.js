import { createStore, applyMiddleware } from 'redux';
import profileReducer from '../reducers/profile';
import thunk from 'redux-thunk';

const store = createStore(profileReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

export {store as default};