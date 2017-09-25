import React, { Component } from 'react';

class LeftPanel extends Component {

    render(){
        return(

        <div className='col col-md-4'>  
            <div className='panel panel-default'>
              <div className='panel-heading'>Add New ToDo</div>
              <div className='panel-body'>
              <form>
                <div className="form-group">
                  <label className=''>I want to..</label>
                  <textarea className="create-todo-text form-control" rows="3"></textarea>
                  <br/>
                  <label className=''>How much of a priority is this?</label>
                  <select name="in-op" required="" className="form-control">
                    <option hidden value=''>Select a Priority</option>
                    <option value='1'>High</option>
                    <option value='2'>Normal</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              </form>
              </div>
              <div className='panel-footer'>
                <div className='btn btn-block btn-lg btn-success'>Add</div>            
              </div>
            </div>            
          </div>
        );
    }
}

export default LeftPanel;