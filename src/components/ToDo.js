import React, {Component} from 'react'

export class ToDo extends Component {
    
    handleCompleteItemButtonClick = (() => {

    })
    
    render() {
  
      let list = this.props.list
      var listItems = null
      console.log(this.props)
      if (list && list.length) {
      listItems = list.map((item,index) => {
        return (
          <li key={index}>
            {item.title}
            <button>Complete</button>
          </li>
        )
      })
      }
      return (
        <div>
            <h3>Pending Items</h3>
            <ul>
                {listItems}
            </ul>
        </div>
      )
    }
  
  }