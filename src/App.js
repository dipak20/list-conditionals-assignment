import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state= {
    usrInput: ''
  }

  inputChangedHandler = (event) => {    
    this.setState({usrInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.usrInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({usrInput: updatedText})
  }

  render() {

    const charList = this.state.usrInput.split('').map((ch,index) => {
      return <Char 
        character={ch}
        key={index} 
        clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <h1>Using List & Conditionals:</h1>
        <hr />
        <input
         type="text"
         onChange={this.inputChangedHandler}
         value={this.state.usrInput} />
        <p>{this.state.usrInput}</p>
        <Validation inputLenghth={this.state.usrInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
