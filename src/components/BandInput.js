// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  // set the inital state
  state = {
    name: ""
  }

  handleOnChange(event) {
    //takes in the value and updates thw sate based on user input 
    this.setState({
      name: event.target.value 
    })
  }


  handleOnSubmit(event) {
    //update the redux state when the user hits the submit button
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit ={(event => this.handleOnSubmit(event))}>
          <input type ="text" value={this.state.name} onChange= {(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
