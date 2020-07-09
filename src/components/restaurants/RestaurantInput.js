import React, { Component } from 'react';

class RestaurantInput extends Component {
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
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Restaurant</label>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
