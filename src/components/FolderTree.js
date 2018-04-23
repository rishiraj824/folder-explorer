import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {

    };
}

class FolderTree extends Component {
    render() {
        const folders = this.props.folders&&this.props.folders.map((folder,i)=>{ 
            return (<li key={i} onClick={()=>this.props.loadFolder(folder)}>
                <img src="/images/folder-icon.png" alt="alt"/>{folder.name}
            </li>)
        })

        return (
            <div className="folders">
                {folders.length>0?<ul> {folders} </ul>:<h2 className="msg">Empty Folder</h2>}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    actions
)(FolderTree);