import React, { Component } from 'react';
import {ToDo} from './components/ToDo'
import './App.css';

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      currentItemName : "",
      list : []
    }
  }

  handleAddItemButtonClick = (() => {

    let item = { title : this.state.currentItemName }
    
    this.setState({
      ...this.state,
      list : this.state.list.concat(item)

    })
  })

  handleItemTextBoxChange = ((e) => {

    this.setState({
      currentItemName : e.target.value

    })
  })

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={this.handleItemTextBoxChange} type="text" />
        <button onClick={this.handleAddItemButtonClick}>Add Item</button>

        <ToDo list = {this.state.list} />
      </div>
    );
  }
}

export default App;
