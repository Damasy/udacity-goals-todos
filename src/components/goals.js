import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './list';
import { handleAddGoal, handleDeleteGoal } from './../actions/goals';

class Goals extends Component {
  addItem = (e) => {
    e.preventDefault();
    const name = this.input.value;
    this.props.dispatch(handleAddGoal(
      name,
      () => this.input.value = ''
    ))
  }
  removeItem = (goal) => {
    const { dispatch } = this.props
    dispatch(handleDeleteGoal(goal));
  }

  render() {
    return (
      <div>
        <h1>Goals List</h1>
        <input
          type="text"
          placeholder="Add a Goal"
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add a Goal</button>
        <List data={this.props.goals}
          remove={this.removeItem}/>
      </div>
    );
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals);