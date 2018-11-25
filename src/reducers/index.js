import { combineReducers } from 'redux';
import { visibilityFilter, todos } from './reducers.js';

export default combineReducers({
    visibilityFilter, todos
});