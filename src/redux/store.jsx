import { createStore } from 'redux';
import rootReducer, { intialState } from './reducers';

const store = createStore(rootReducer, intialState)

export default store;