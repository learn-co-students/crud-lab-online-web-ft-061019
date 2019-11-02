import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }


  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  
  render() {
    console.log("Rest Input State:", this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>New Restaurant Name: <br/>
            <input onChange={this.handleChange} type="text" name="text" id="text" value={this.state.text} />
          </p>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;