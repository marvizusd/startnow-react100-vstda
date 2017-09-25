import React, { Component } from 'react';
import EditForm from './components/EditForm';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';



class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='white'>Very Simple Todo App</h1>
          <h3 className='white'>Track all of the things</h3>
        </div>

        <div className='row'>
          <LeftPanel />

          <RightPanel />

        </div>        

      </div>

    );
  }
}

export default App;