import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const TOGGLE_GOAL = 'TOGGLE_GOAL';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal: goal
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id: id
  }
}

export function handleAddGoal(name, cb) {
  return (dispatch) => {
    API.saveGoal(name)
  .then(goal => {
    cb();
    dispatch(addGoal(goal));
  })
  .catch(err => alert('There was an error, Try again!'))
  }
}

export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    API.deleteGoal(goal.id)
    .catch(err => {
      dispatch(addGoal(goal));
      console.error(err);
      alert(err);
    })
  }
}