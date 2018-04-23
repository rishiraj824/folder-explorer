import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {

    };
}

class Header extends Component {
    render() {
        const links = this.props.links.split('/');
        const renderLinks = links.map((link,i)=>{
            return <li key={i}>{link}/</li>
        })
        return (
            <div className="header">
                <ul>
                    {renderLinks}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Header);