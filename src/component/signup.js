import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { Form,FormControl,ControlLabel,FormGroup,Radio,Col } from 'react-bootstrap';


class signup extends Component {

  constructor(){
    super();
    this.state = {
      gre: '',
      TOFEL: '',
      CPI: '',
      projects:'',
      publications:'',
      internship:'',
      research:'',
      ngo:'',
      study:'',
      spl:'',
      quant:'',
      verbal:'',
      awa:'',
      ngoyrs:'',
      College:'',
      show: false
    };
  }

 onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }




  onSubmit = (e) => {
    e.preventDefault();
const {  gre,TOFEL,CPI,projects,publications,internship,research,ngo,study,spl,quant,verbal,awa,college,ngoyrs} = this.state;
}

  render() {
        const { gre,TOFEL,CPI,projects,publications,internship,research,ngo,study,spl,quant,verbal,awa,college,ngoyrs } = this.state;
    return (

            <div>
                   
                  <div id="signup">
                        <input type="text" id="first" placeholder="First Name"/>
                        <input type="text" id="last" placeholder="Last Name"/>
                        <input type="email" id="email" placeholder="Email"/>
                    <input type="password" id="password" placeholder="Password"/>
                    <input type="password" id="confirm" placeholder="Confirm Password"/>
                    <button id="send">Send</button>
            </div>
                </div>
            
            );
      }
}