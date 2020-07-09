import React, { Component } from 'react';
//import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({
      review: {
          text: this.state.text, 
          restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      ...this.state,
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
    console.log("Review Input State:", this.state)
    console.log("ReviewInputProps:", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>New Review Name: <br/>
            <input onChange={this.handleChange} type="text" name="text" id="text" value={this.state.text} />
          </p>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};  

export default ReviewInput;
