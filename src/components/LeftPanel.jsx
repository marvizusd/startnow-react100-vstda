import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LeftPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      description:'',
      priority:'',
    }

    this.handleFirstInput = this.handleFirstInput.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.addItems(this.state);
    this.setState({ description: '', priority: '' });
  }

  handleFirstInput(event){
    this.setState({ description: event.target.value });
  }

  handlePriority(event){
    this.setState({ priority: event.target.value });
  }

    render(){
        return(
          <div className='col col-md-4'>  
            <div className='panel panel-default'>
              <div className='panel-heading'>Add New ToDo</div>
              <div className='panel-body'>
              <form>
                <div className="form-group">
                  <label className=''>I want to..</label>
                  <textarea
                    onChange={this.handleFirstInput}
                    value={this.state.description}
                    className="create-todo-text form-control"
                    rows="3">
                  </textarea>
                  <br/>
                  <label className=''>How much of a priority is this?</label>
                  <select name="in-op" required="" value={this.state.priority} onChange={this.handlePriority} className="form-control">
                    <option hidden value='' >Select a Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Normal</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              </form>
              </div>
              <div className='panel-footer'>
                <div type='submit' onClick={this.handleSubmit} className='btn btn-block btn-lg btn-success'>Add</div>            
              </div>
            </div>            
          </div>
        );
    }
}

export default LeftPanel;