import React from "react";
import { Character } from "./Charecter";
import data from "./data";

export class Container extends React.Component {
constructor() {
  super()
  console.log('constructor')
  this.state = {
    xndzor: {
      value: "",
    },
  };
}

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.xndzor.value}
          onChange={(ev) =>
            this.setState({
              xndzor: {
                value: ev.target.value,
              },
            })
          }
        />
        {console.log("render")}
      </React.Fragment>
    );
  }
}