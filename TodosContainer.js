import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component{

  render(){
    return this.props.todos.map((elem) =>(
    <TodoItem todo={elem}/>))
  }
}
export default Todos;
