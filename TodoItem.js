import React from 'react';

class TodoItem extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <p>{this.props.todo.name}</p>
  }
}
export default TodoItem;
