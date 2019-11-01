import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

//RestaurantInput, and RestaurantsContainer working.  need to now display the restaurants 
// with the Restaurants component and Restaurant (for each restaurant in the map), then
// on to reviews. -- will need to next reviews container under restaurant I think and 
// connect reviewsconatiner to the store to get access to the redux store
// use filter to get only the reviews with the current restaurantID

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  
  render() {
    console.log("Rest Input State:", this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>New Restaurant Name: <br/>
            <input onChange={this.handleChange} type="text" name="text" id="text" value={this.state.text} />
          </p>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
