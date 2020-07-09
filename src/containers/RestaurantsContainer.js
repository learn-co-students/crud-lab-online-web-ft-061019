import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants 
          restaurants={this.props.restaurants} 
          deleteRestaurant={this.props.deleteRestaurant} 
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restName => dispatch({type: "ADD_RESTAURANT", text: restName}),
    deleteRestaurant: restId => dispatch({type: "DELETE_RESTAURANT", id: restId})
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
