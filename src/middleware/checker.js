import { ADD_TODO } from './../actions/todos';
import { ADD_GOAL } from './../actions/goals';

const checker = (store) => (next) => (action) => {
  if(
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes('bitcoin')
  ) {
    alert('Oh, No, this is a bad idea;')
  }
  if(
    action.type === ADD_TODO
  ) {
    alert("Don't forget to [name of your todo item]!")
  }
  if(
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes('bitcoin')
  ) {
    alert('Oh, No, this is a bad idea;')
  }
  if(
    action.type === ADD_GOAL
  ) {
    alert("That's a great goal!")
  }

  return next(action);
}

export default checker;