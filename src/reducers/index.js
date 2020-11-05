import { combineReducers } from 'redux';

import players from './players';
import list from './list';
import filter from './filter';

export default combineReducers({
    players,
    list,
    filter,
});
