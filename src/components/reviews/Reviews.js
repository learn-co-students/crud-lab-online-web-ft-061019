import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviewsByRestaurantId = restaurantId => {
    //should probably abstract the filtering to another function and call it here with map.  Looks a little busy
    return this.props.reviews.filter(review => review.restaurantId === restaurantId).map(review => {
      return (
        <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
      )
    })
  }
  
  render() {
    console.log(this.props)
    return (
      <ul>
        {this.renderReviewsByRestaurantId(this.props.restaurant.id)}
      </ul>
    );
  }
};

export default Reviews;