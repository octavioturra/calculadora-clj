/*
 * HomePage
 * This is the first thing users see of our App
 */

import * as appActions from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {mapStateToProps, mapDispatchToProps} from '../../utils/mapTo';

const actions = [
  appActions
];

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName, isFetching, error } = this.props.home;
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is the demo for the <span>{ projectName }</span> by <a href={'https://twitter.com/' + ownerName} >@{ ownerName }</a></h2>
        <div className="form-group">
          <label>Change to your project name:</label>
          <input className="form-control" type="text" onChange={(ev) => { this.props.actions.asyncChangeProjectName(ev.target.value); }} value={projectName} />
        </div>
        <div>
          <label>Change to your name:</label>
          <input className="form-control" type="text" onChange={(ev) => {this.props.actions.asyncChangeOwnerName(ev.target.value); }} value={ownerName} />
        </div>
        {(isFetching)?<div className="alert alert-warn">
          Loading
        </div>:null}
        {(error)?<div className="alert alert-danger">
          {error}
        </div>:null}
        <Link className="btn" to="/readme">Setup</Link>
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps(actions))(HomePage);
