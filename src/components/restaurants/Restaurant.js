import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDeleteBtn = event => {
     this.props.deleteRestaurant(this.props.restaurant.id)
  }
  
  render() {
    console.log(this.props)
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDeleteBtn}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
