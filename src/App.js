import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FolderTree from './components/FolderTree';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends React.Component {
  render() {
    const links = this.props.root.link;
    const folders = this.props.root.folders;
    return (
      <div className="App">
        <Header links={links} />
        {this.props.root.name!=='Home'&&
          <img src="/images/left.png" alt="left" className="left-img" onClick={()=>this.props.loadPrevious(folders)} />
        }
        <button onClick={()=>this.props.createFolder(links)} className="btn">Create New Folder</button>
        <FolderTree folders={folders} />
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
