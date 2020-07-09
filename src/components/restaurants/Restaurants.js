import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(rest => {
      return (
        <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant} />
      )
    })
  }
  
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;