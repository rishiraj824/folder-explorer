import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FolderTree from './components/FolderTree';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  render() {
    const oldFolder = this.props.root;
    const links = this.props.root.link;
    const folders = this.props.root.folders;
    return (
      <div className="App">
        <Header links={links} />
        <button onClick={()=>this.props.createFolder(links,folders)} className="btn">Create New Folder</button>
        <FolderTree folders={folders} oldFolder={oldFolder} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      root: state.root
  };
}

export default withRouter(connect(mapStateToProps, actions)(App))
