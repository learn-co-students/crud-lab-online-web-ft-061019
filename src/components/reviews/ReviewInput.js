import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  // constructor(props) {
  //   super(props);
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
    this.props.addReview({
      // review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      // }
    })
    this.setState({
      ...this.state,
      text: ""
    })
  }
  
  render() {
    console.log("rviewState=", this.state)
    console.log("rviewProps=", this.props)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p> Create Review: 
            <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          </p>
            <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
