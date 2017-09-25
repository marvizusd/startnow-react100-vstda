import React, { Component } from 'react';
import EditForm from './EditForm';
import ListItems from './ListItems';


class RightPanel extends Component {

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

                    <EditForm />
                    <ListItems />
                    
                  </div>

              {/* My list of todo items quick view */}

                </div>
          </div>
        );
    }
}


export default RightPanel;