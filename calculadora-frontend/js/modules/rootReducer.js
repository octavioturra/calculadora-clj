/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import home from './homeReducer';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({ home }); //add your reducer here, comma separated

export default rootReducer;
