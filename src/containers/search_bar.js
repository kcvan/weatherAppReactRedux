import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    // remember that whenever we pass off a function that references "this", the "this" is not bound to
    // the component, meaning we have to bind it or use a fat arrow function (look below).
    // Whenever we had a callback off, and the callback references "this", you have to bind or 
    // use a fat arrow function to correct the context.
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term:event.target.value});
  }
  render() {
    return (
        <form className="input-group">
          <input 
            placeholder="Get a five-day forcast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );
  }
}