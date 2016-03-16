/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../img/logo.png';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <main>
        <nav className="navbar navbar-default navbar-fixed-top">
          <Link to="/" className="navbar-brand">
            <img alt="" src={Logo} height={25}/>
          </Link>
          <div className="container-fluid">
          </div>
        </nav>
        <br/>
        <br/>
        <div>
          { this.props.children }
        </div>
      </main>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
