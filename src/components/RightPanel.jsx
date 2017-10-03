import React, { Component } from 'react';
import EditForm from './EditForm';


class RightPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit:true,
      priority1:"list-group-item list-group-item-danger",
      priority2:"list-group-item list-group-item-warnig",
      priority3:"list-group-item list-group-item-success"
    }
    this.editOn=this.editOn.bind(this);
  }

  editOn(event){
    event.preventDefault();
    this.setState({edit:false})
  }

  saveButton(event){
    event.preventDefault();
    this.setState({edit:true})
  }

  TodoList(){
    var list = this.props.TodoList;
    var listItem = list.map((item) => {
      return(
        <div key={item.id}>
        {
        this.state.edit ?
        (   <a id={item.id} key={item.id} value={item.prior} className="list-group-item list-group-item-warning">    
              <label>
                <strong className='list-group-item-text'>{item.desc}</strong>
              </label>
              <span role='button' onClick='' className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed",margin:'5px 0px'}}></span>
              <span role='button' onClick={this.editOn} className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'5px 15px'}}></span>                      
            </a>
        )
        : (<EditForm />)
        }</div>
      )}  
  )
    return listItem;
};
  
    render(){

        return(

            <div className='col col-md-8'>      
                <div className='panel panel-default'>
                  <div className='panel-heading'>View Todos</div>

                {/* My list of todo items quick view */}

                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-info">
                      <h4 className='list-group-item-heading'><strong>Welcome to Very Simple Todo App!</strong></h4>
                      <p className='list-group-item-text '>Get started now by adding a new todo on the left.
                      </p>
                    </a>

                    {/* <EditForm /> */}

                    <div>
                      {this.TodoList()}

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
                    </div>
                    
                  </div>
                </div>
          </div>
        );
    }
}


export default RightPanel;