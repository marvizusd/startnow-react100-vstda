import React, { Component } from 'react';
import EditForm from './components/EditForm';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

var counter = 0;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList:[]
    }
    this.addItems = this.addItems.bind(this);
    this.updateItems = this.updateItems.bind(this);    
  }

  addItems(item){
    let todoListCopy = [...this.state.todoList]
    
    todoListCopy.push({
      description: item.description,
      priority: item.priority,
      id: counter++
    });

    this.setState({
      todoList: todoListCopy
    });
  }


  updateItems(updateTodo){
    const todoListCopy = [...this.state.todoList]

    for(let i = 0; i<todoListCopy.length; i++){
      if(updateTodo.id === todoListCopy[i].id ){
        todoListCopy[i].description = updateTodo.description;
        todoListCopy[i].priority = updateTodo.priority
      }
    }

    this.setState({
      todoList: todoListCopy
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='white'>Very Simple Todo App</h1>
          <h3 className='white'>Track all of the things</h3>
        </div>

        <div className='row'>
          <LeftPanel addItems={this.addItems} />
          <RightPanel todoList={this.state.todoList}
                      updateItems={this.updateItems}
          />
        </div>        
      </div>
    );
  }
}

export default App;