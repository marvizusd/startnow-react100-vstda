import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: this.props.todoItem.description,
      priority: this.props.todoItem.priority,
      id:this.props.todoItem.id,
      edit:false,
      date: ''
    }

    this.handleDescrip = this.handleDescrip.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleDescrip(event){
    this.setState({ description: event.target.value });
  }

  handlePriority(event){
    this.setState({ priority: event.target.value });
  }

  handleDate(event){
    this.setState({ date: event.target.value });
  }


  handleSubmit(event){    
    event.preventDefault();
    this.props.updateItems({
      description:this.state.description,
      priority:this.state.priority,
      id:this.props.todoItem.id
    })
  }
  
    render(){
      return (
        <div className='panel-body list-group-item-warning'>
        <form>
          <div className="form-group">
            <label className=''>Description</label>
              <textarea value={this.state.description} onChange={this.handleDescrip} className="update-todo-text form-control" rows="3"></textarea>
              <br/>

            <div className='row'>
              <div className='col-md-6'>
                <label className=''>Due Dates</label>
                <div>
                  <input value={this.state.date} onChange={this.handleDate} className='update-todo-date form-control' placeholder='mm/dd/yyyy' />
                </div>
              </div>

              <div className='col-md-6'>
                <label className=''>Priority</label>
                <select name="in-op" required="" value={this.state.priority} onChange={this.handlePriority} className="update-todo-priority form-control">
                  <option hidden >Select a Priority</option>
                  <option value='1'>High</option>
                  <option value='2'>Normal</option>
                  <option value='3'>Low</option>
                </select>
              </div>
            </div>

            <br />
            
              <div className='pull-right'>                
                <button onClick={this.handleSubmit} className='update-todo btn btn-success'>Save</button>
              </div> 
            
          </div>
        </form>
        </div>
    );
  }
}

export default EditForm;