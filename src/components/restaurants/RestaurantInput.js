import React, { Component } from 'react';

class RestaurantInput extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     text: ""
  //   }
  // }

  state = {
    text: ""
  }

   handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      // ...this.state,
      text: ""
    })
  }

 

  render() {
    console.log("restaurantState=",this.state)
    console.log("restaurantProps=",this.props)
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>Restaurant Name:
            <input onChange={(event) => this.handleOnChange(event)} type="text" name="text" id="text" value={this.state.text} />
          </p> 
          <input type="submit" value="Add Restaurant" /> 
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
