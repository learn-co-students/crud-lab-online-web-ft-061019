import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Add A Review</label>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
