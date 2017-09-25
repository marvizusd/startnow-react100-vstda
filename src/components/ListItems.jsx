import React, { Component } from 'react';


class ListItems extends Component {
    render(){
        return(
          <div>
            <a href="#" className="list-group-item list-group-item-warning">
            <label className='checkbox-inline' type='checkbox'><input type='checkbox' />
            <strong className='list-group-item-text'>Pick up milk from the market</strong>
            </label>
            <span className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed"}}></span>
            <span className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></span>                      
          </a>

          <a href="#" className="list-group-item list-group-item-danger">
            <label className='checkbox-inline' type='checkbox'><input type='checkbox' />
            <strong className='list-group-item-text'>Write some code to learn Javascript</strong>
            </label>
            <div className='glyphicon glyphicon-trash danger pull-right delete-todo' style={{color: "DarkRed"}}></div> 
            <div className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></div>
          </a>

          <a href="#" className="list-group-item list-group-item-success">
            <label className='checkbox-inline' type='checkbox'><input type='checkbox' />
            <strong className='list-group-item-text'>Go to the gym and exercise</strong>
            </label>
            <div className='glyphicon glyphicon-trash danger pull-right m-3 delete-todo' style={{color: "DarkRed"}}></div>
            <div className='glyphicon glyphicon-edit pull-right edit-todo' style={{color: "DarkCyan",margin:'0px 15px'}}></div>
          </a>
          </div>
        );
    }
}

export default ListItems;