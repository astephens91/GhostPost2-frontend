import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      is_boast: true,
      value: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleTextChange = event => {
    this.setState({ value: event.target.value });
  };

  addPost = event => {
    event.preventDefault();
    console.log(event.target.children);
    fetch("http://localhost:8000/post/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: event.target.children[0].control.value,
        is_boast: event.target.children[2].control.checked
      })
    });
    window.location.reload()
  };

  render() {
    return (
      <form onSubmit={this.addPost}>
        <label>
          What you got to say:
          <input
            type="text"
            name="content"
            value={this.state.value}
            onChange={this.handleTextChange}
          />
        </label>
        <br />
        <label>
          Is this a boast?
          <input
            name="is_boast"
            type="checkbox"
            checked={this.state.is_boast}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
