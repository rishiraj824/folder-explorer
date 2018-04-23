import { combineReducers } from 'redux';
import * as ActionTypes from './../constants/types';
import initialState from '../data.json';
import update from 'react-addons-update';

export function folderReducer(state = initialState.root,action){
  switch(action.type){
    case ActionTypes.LOAD_FOLDER:
      return {...action.payload};

    case ActionTypes.CREATE_FOLDER:
      const folders = [...state.folders,...action.payload];
      state.folders = folders;
      return {...state};

    case ActionTypes.PREVIOUS_FOLDER:
      return {...action.payload};
      
    default:
      return {...state};
  }
}


const rootReducer = combineReducers({
  root:folderReducer
});

export default rootReducer;
