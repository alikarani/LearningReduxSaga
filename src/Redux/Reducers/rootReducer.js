import { combineReducers } from 'redux';
import counterReducer from './CounterReducer/counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;