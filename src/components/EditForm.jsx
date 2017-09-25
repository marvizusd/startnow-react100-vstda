import React, { Component } from 'react';

class EditForm extends Component {
    render(){
        return(
            <div className='panel-body list-group-item-warning'>
            <form>
              
              <div className="form-group">
                <label className=''>Description</label>
                  <textarea className="update-todo-text form-control" rows="3"></textarea>
                  <br/>

                {/* BEGINING OF ROW */}

                <div className='row'>
                  <div className='col-md-6'>
                    <label className=''>Due Dates</label>
                    <div>
                      <input className='update-todo-date form-control' placeholder='mm/dd/yyyy' />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <label className=''>Priority</label>
                    <select name="in-op" required="" className="update-todo-priority form-control">
                      <option hidden value=''>Select a Priority</option>
                      <option value='1'>High</option>
                      <option value='2'>Normal</option>
                      <option value='3'>Low</option>
                    </select>
                  </div>
                </div>

                <br />
                
                  <div className='pull-right'>                
                    <button className='update-todo btn btn-success'>Save</button>
                  </div> 
                
                {/* END OF ROW */}

              </div>
            </form>
            </div>
        );
    }
}

export default EditForm;