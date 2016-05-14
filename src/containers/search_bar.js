import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    // remember that whenever we pass off a function that references "this" inside of the function, 
    // the "this" is not bound to the component, meaning we have to bind it or use a fat arrow function 
    // in our jsx. Whenever we had a callback off, and the callback references "this", you have to bind or 
    // use a fat arrow function to correct the context.
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  // You cant use a fat arrow function inside a class, so you ether write the callback out 
  // in the event handler, or you bind it in the constructor. 
  onInputChange(event) {
    console.log(event);
    console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event) {
    // This will tell the browser to not submit the form itself
    event.preventDefault();
  }

  // When you press enter ony our keyboard while a form element child is focused (search bar or submit button),
  // the form automatically thinks you're trying to submit the contents of this form. So when we have
  // our cursor inside the input, click the button, or press enter, the browser thinks youre trying ot submit
  // a html form, so it sends a post request to the server.

  // Since we don't want the page to refresh every time someone presses enter or tries to submit, we can add a
  // function handler (native react attribute onSubmit) that we can pass in a callback that we create in the class.

  // If we're using preventDefault, why do we use a form anyway? We use it because we get some things for free.
  // We get the behavior for typing into a input and clicking submit or pressing enter will submit our form for us.
  // If we didn't use form, we would have to set event listeners for the enter key and submit click. Now we only have
  // one event handler, our onSubmit.
  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
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