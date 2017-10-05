import React, { Component } from 'react';
import EditForm from './EditForm';


class RightPanel extends Component {

  renderWelcome () {
    var listIsEmpty = this.props.todoList.length === 0;
    if (listIsEmpty) {
      return (
        <a href="#" className="list-group-item list-group-item-info">
          <h4 className='list-group-item-heading'><strong>Welcome to Very Simple Todo App!</strong></h4>
          <p className='list-group-item-text '>Get started now by adding a new todo on the left.
          </p>
        </a>
      )      
    }
  }

  renderTodoItems () {
    var listIsEmpty = this.props.todoList.length === 0;
    if (listIsEmpty) { return null }

    var listItem = this.props.todoList.map((item) => {
      return <EditForm key={item.id} todoItem={item} updateItems={this.props.updateItems}/>

    });
    
    return listItem;
  }
  
  render(){
    return(
      <div className='col col-md-8'>      
        <div className='panel panel-default'>
          <div className='panel-heading'>View Todos</div>

          {/* My list of todo items quick view */}
          <div className="list-group">
            {/* if todoList is empty render welcome */}
            {this.renderWelcome()}
            {this.renderTodoItems()}
          </div>
        </div>
      </div>
    );
  }
}


export default RightPanel;















                      {/* <a className="list-group-item list-group-item-warning">
                      <label>
                      <strong className='list-group-item-text'>Pick up milk from the market</strong>
                      </label>
                      <span role='button' onClick={this.handleDelete} className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed"}}></span>
                      <span role='button' onClick={this.handleDelete} className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></span>                      
                    </a>

                    <a className="list-group-item list-group-item-danger">
                      <label>
                      <strong className='list-group-item-text'>Write some code to learn Javascript</strong>
                      </label>
                      <div role='button' onClick={this.handleDelete} className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed"}}></div> 
                      <div role='button' onClick={this.handleDelete} className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></div>
                    </a>

                    <a className="list-group-item list-group-item-success">
                      <label>
                      <strong className='list-group-item-text'>Go to the gym and exercise</strong>
                      </label>
                      <div role='button' onClick={this.handleDelete} className='glyphicon glyphicon-trash danger pull-right m-3 delete-todo' style={{color: "DarkRed"}}></div>
                      <div role='button' onClick={this.handleDelete} className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></div>
                    </a> */}