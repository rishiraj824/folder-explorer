import * as ActionTypes from '../constants/types';

export function createFolder(links){
    return function(dispatch){
        dispatch({
            type: ActionTypes.CREATE_FOLDER, 
            message: 'Folder Created',
            payload:[{
                name:"New Folder",
                link:`${links}/New Folder`,
                folders:[]
            }]
        });
    }
}

export function loadPrevious(folder){
    return function(dispatch){
        dispatch({
            type: ActionTypes.PREVIOUS_FOLDER,
            message: 'Going to Previous Folder',
            payload:folder
        })
    }
}

export function loadFolder(folder){
    return function(dispatch){
        dispatch({type:ActionTypes.LOAD_FOLDER, message:'Loading Folder', payload:folder});
    }
}
