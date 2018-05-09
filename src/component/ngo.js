import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { Forms,FormControl,ControlLabel,FormGroup,Radio } from 'react-bootstrap';

class ngo extends Component {

	constructor(){
		super();
		this.state = {
     ngoyrs:''
    };
	}

 onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  ngoyrs} = this.state;
}

  render() {
  	    const {ngoyrs } = this.state;
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>No. of years you are associated with ngo</ControlLabel>
          <FormControl
            type="number"
            value={this.state.ngoyrs}
            placeholder="Enter number"
            onChange={this.onChange} />
          <FormControl.Feedback />
                 </FormGroup>        
      </form>
    );
  }
}

export default ngo;