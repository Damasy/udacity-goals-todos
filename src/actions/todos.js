import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    API.deleteTodo(todo.id)
    .catch(err => {
      dispatch(addTodo(todo));
      console.error(err);
      alert(err);
    })
  }
}

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    API.saveTodo(name)
  .then(todo => {
    cb();
    dispatch(addTodo(todo));
  })
  .catch(err => alert('There was an error, Try again!'))
  }
}

export function handleToggleTodo(todo) {
  return (dispatch) => {
    dispatch(toggleTodo(todo.id));
    API.saveTodoToggle(todo.id)
    .catch(err => {
      dispatch(toggleTodo(todo.id));
      alert('There was an error, Try again!')
    })
  }
}