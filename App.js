import React from 'react';
import Header from './components/Header';
import Todos from './components/TodosContainer';
import AddTodo from './components/AddTodo';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos:[{name:'task1', text:'required Field 1'},
      {name:'task2', text:'required Field 2'},
      {name:'task3', text:'required Field 3'}]
    }
  }

  render(){
    return(
      <div style={centering}>
        <React.Fragment>
        <Header/>
        <AddTodo/>
        <Todos todos={this.state.todos}/>
        <h3>testing the initial setup</h3>
        </React.Fragment>
      </div>
    )
  }
}

const centering = {
  textAlign:'center'
}
export default App;
