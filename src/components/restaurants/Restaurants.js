import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  // renderRestaurants = () => {
  //   return this.props.restaurants.map(aurant => {
  //     return (
  //       <Restaurant key={aurant.id} restaurant={aurant} deleteRestaurant={this.props.deleteRestaurant} />
  //     )
  //   })
  // }

  render() {
    const { restaurants, deleteRestaurant} = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return(
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={deleteRestaurant}
        />
      )
    })

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;