import React, { Component } from 'react';
import {connect} from 'react-redux';
import ConnectedGoals from './goals';
import ConnectedTodos from './todos';
import handleInitialData from './../actions/shared';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const {loading} = this.props;

    if(loading === true) {
      return <h3>Loading</h3>
    }
    return (
      <div>
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
