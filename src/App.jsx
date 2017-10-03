import React, { Component } from 'react';
import EditForm from './components/EditForm';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

var counter = 0;


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      TodoList:[]
    }
    this.addItems=this.addItems.bind(this);
  }

  addItems(LeftPanel){
    let todoListCopy = [...this.state.TodoList]
    todoListCopy.push({
      desc:LeftPanel.Description,
      prior:LeftPanel.Priority,
      id:counter++
    });
    this.setState({TodoList:todoListCopy});
  }

  TodoList(){
    var list = this.state.TodoList;
    var listItem = list.map((item) => 
    <a id={item.id} value={item.prior} className="list-group-item list-group-item-warning">
      <label>
      <strong className='list-group-item-text'>{item.desc}</strong>
      </label>
      <span role='button' onClick='' className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed"}}></span>
      <span role='button' onClick='' className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></span>                      
    </a>
  
  )
};
  
  render() {

    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='white'>Very Simple Todo App</h1>
          <h3 className='white'>Track all of the things</h3>
        </div>

        <div className='row'>
          <LeftPanel addItems={this.addItems}/>

          <RightPanel TodoList={this.state.TodoList}/>

        </div>        

      </div>

    );
  }
}

export default App;