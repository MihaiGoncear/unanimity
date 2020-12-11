import './Styles/App.scss';
import React, { Component } from 'react';
import { Header } from './PageElements/Header/Header'
import { Main } from './PageElements/Main/Main'
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuSelection: '',
    }
  }

  HandleMenuOptions = (event, navigationBar) => {
    this.setState({ menuSelection: event.target.innerText });    
    for(let menuItem in navigationBar){
      navigationBar.map(menuItem)
    }
    console.log(event.target.innerText)
    
    
  }

  render() {
    return (
      <Router>
        <div className="full__container">
          <Header menuSelection={this.HandleMenuOptions} />
          <Main stateTest={this.state.menuSelection} />  
        </div>
      </Router>
    );
  }
}

export default App;
