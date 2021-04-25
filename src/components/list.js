import React from 'react';

function List(props) {
  console.log(props)
  return (
    <ul>
      {
        props.data.map((item) => (
          <li key={item.id}
            className={item.complete ? 'completed' : ''}
            onClick={() => props.toggle(item)}>
            <span>{item.name}</span>
            <button onClick={() => props.remove(item)}>X</button>
          </li>
          )
        )
      }
    </ul>
  )
}

export default List;