import * as ActionTypes from '../constants/types';
let c = 0;

export function createFolder(links,level){
    c=c+1;
    return function(dispatch){
        dispatch({
            type: ActionTypes.CREATE_FOLDER, 
            message: 'Folder Created',
            payload:[{
                name:`NewFolder${c}`,
                link:`${links}/NewFolder${c}`,
                folders:[],
                level:level+1
            }]
        });
    }
}

export function loadPrevious(folder){
    console.log(folder);
    return function(dispatch){
        dispatch({
            type: ActionTypes.PREVIOUS_FOLDER,
            message: 'Going to Previous Folder',
            payload:folder
        })
    }
}

export function loadFolder(folder,oldFolder){
    c=0;
    return function(dispatch){
        dispatch({type:ActionTypes.LOAD_FOLDER, message:'Loading Folder', payload:folder});
    }
}
