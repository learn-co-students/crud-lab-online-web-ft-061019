import React, { Component } from 'react';

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