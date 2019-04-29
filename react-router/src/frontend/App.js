import React, {Component} from 'react';
import NavbarComp from './components/NavbarComp';
import Search from './components/Search';
import './App.css';

class App extends Component {
  
  render(){
  return (
    <div className="App">
    
    
      <NavbarComp/>   
      <Search/>
    </div>
  );
  }
}

export default App;
