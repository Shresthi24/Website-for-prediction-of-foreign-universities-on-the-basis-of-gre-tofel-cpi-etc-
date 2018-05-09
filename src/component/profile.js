import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { Form,FormControl,ControlLabel,FormGroup,Radio,Col } from 'react-bootstrap';
import Abc from '../Abc';
import '../css/profile.css';

class profile extends Component {

	constructor(){
		super();
		this.state = {
      name: '',
      address: '',
      mobile: '',
      country:'',
    };
	}

 onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  name,address,mobile,country} = this.state;
}

  render() {
  	    const {name,address,mobile,country } = this.state;
    return (
      <div class="ful">
      <Abc/>
      {this.props.chidren}
      <Form horizontal>
      <div class="container box">

        <FormGroup controlId="formBasicText">
        <Col componentClass={ControlLabel} sm={2}>Name</Col>
        <Col sm={2} >
          <FormControl id="asd"
            type="text"
            value={this.state.name}
            placeholder=""
            onChange={this.onChange} />
             </Col>      
          <FormControl.Feedback />

           <Col componentClass={ControlLabel} sm={2}>Mobile </Col>
           <Col  sm={2}>
          <FormControl id="asd"
            type=""
            value={this.state.mobile}
            placeholder=""
            onChange={this.onChange} step="0.01" />
            </Col>
          <FormControl.Feedback />

          <Col componentClass={ControlLabel} sm={2}>Country</Col>
           <Col sm={2} >
          <FormControl id="asd"
            type=""
            value={this.state.mobile}
            placeholder=""
            onChange={this.onChange} step="0.01" />
            </Col>
          <FormControl.Feedback />

          </FormGroup>

           <FormGroup controlId="formBasicText">
                   <Col componentClass={ControlLabel} sm={2}>Address</Col>
           <Col sm={2}>
          <textarea rows="4" cols="50" value={this.state.address} onChange={this.onChange} />
            </Col>
          <FormControl.Feedback />
          
                 </FormGroup>

            
           <center> <button type="submit" class="btn btn-default"> Save </button> </center>
        </div>
      </Form>
      </div>
    );
  }
}

export default profile;