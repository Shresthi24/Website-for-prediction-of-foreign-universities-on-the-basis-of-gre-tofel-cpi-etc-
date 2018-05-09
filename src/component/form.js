import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { Form,FormControl,ControlLabel,FormGroup,Radio,Col } from 'react-bootstrap';
import ToggleDisplay from 'react-toggle-display';
import ngo from '../component/ngo.js';
import axios from 'axios';
import Abc from '../Abc.js';
import '../css/form.css';

class form extends Component {

	constructor(){
		super();
		this.state = {
      TOFEL: '',
      CPI: '',
      projects:'',
      internship:'',
      research:'',
      spl:'',
      quant:'',
      verbal:'',
      awa:'',
      college:'',
      undergrad:''
     };
	}

 onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

 

  onSubmit = (e) => {
    e.preventDefault();
const { TOFEL,CPI,projects,internship,research,spl,quant,verbal,awa,college,undergrad} = this.state;


axios.post('/api/index', { TOFEL,CPI,projects,internship,research,spl,quant,verbal,awa,college,undergrad})
      .then((result) => {
        this.props.history.push("/college")
      });
  
}

  render() {
const { TOFEL,CPI,projects,internship,research,spl,quant,verbal,awa,college,undergrad} = this.state;

    return (
     <div class="ful">
      <Abc/>

      <Form horizontal onSubmit={this.onSubmit}>

          <div class="container box">

<FormGroup controlId="formControlsSelect">
<Col sm={3}>  <ControlLabel>College</ControlLabel> </Col>
         <Col sm={3}>
            <FormControl componentClass="select" value={this.state.college }  name="college" onChange={this.onChange}>
        <option  value="">---Select---</option>
        <option  value="Caltech">Caltech</option>
        <option  value="Texas">Texas</option>
       </FormControl>
       </Col>
   

        
<Col componentClass={ControlLabel} sm={3}> Specialization</Col>
         <Col sm={3}>
          <FormControl  componentClass="select"  name="spl" value={this.state.spl} onChange={this.onChange} >
          <option  value="">---Select---</option>
        <option  value="Computer Science">Computer Science</option>
        <option  value="Chemical Engineering">Chemical Engineering</option>
        <option  value="Civil Engineering">Civil Engineering</option>
             </FormControl>
             </Col>
     </FormGroup>


<FormGroup controlId="formControlsSelect">
<Col sm={3}>  <ControlLabel>undergrad College</ControlLabel> </Col>
         <Col sm={3}>
            <FormControl componentClass="select" value={this.state.undergrad }  name="undergrad" onChange={this.onChange}>
        <option  value="">---Select---</option>
        <option  value="IIIT Gwalior">IIIT Gwalior</option>
        <option  value="IIIT Allahabad">IIIT Allahabad</option>
        <option  value="IIT BHU">IIT BHU</option>
        <option  value="IIT Kanpur">IIT Kanpur</option>
        <option  value="IIT KGP">IIT KGP</option>
        <option  value="IIT Mumbai">IIT Mumbai</option>
       </FormControl>
       </Col>
    </FormGroup>

        


        <FormGroup controlId="formBasicText">               
          <Col componentClass={ControlLabel} sm={2}> TOFEL </Col>
          <Col sm={3}>
          <FormControl type="text" name="TOFEL" value={this.state.TOFEL} placeholder="" onChange={this.onChange} step="0.01" >
          
          </FormControl>
          </Col>

           <Col componentClass={ControlLabel} sm={2}> CPI</Col>
          <Col sm={3}>
          <FormControl type="text" name="CPI" value={this.state.CPI} placeholder="" onChange={this.onChange} step="0.01">
          </FormControl>
          </Col>
                 </FormGroup>


            <FormGroup controlId="formBasicText">
          <Col componentClass={ControlLabel} sm={2}>Quantitative  </Col>
          <Col sm={2}>
          <FormControl  id="asd" type="text" name="quant" value={this.state.quant} placeholder="" onChange={this.onChange} step="0.01" >
                    </FormControl>
                    </Col>
       
          <Col componentClass={ControlLabel} sm={2}> Verbal  </Col>
          <Col sm={2}>
          <FormControl id="asd" type="text" name="verbal" value={this.state.verbal} placeholder="" onChange={this.onChange} step="0.01">
          
          </FormControl >
       </Col>

          <Col componentClass={ControlLabel } sm={2}>AWA </Col>
          <Col sm={2}>
          <FormControl id="asd" type="text" name="awa" value={this.state.awa} placeholder="" onChange={this.onChange} step="0.01" >
          
          </FormControl > 
          </Col>    
                 </FormGroup>

           <FormGroup controlId="formBasicText">
         
         
                 </FormGroup>

                  <FormGroup controlId="formBasicText">
          <Col componentClass={ControlLabel} sm={3}>Number of projects</Col>
         <Col sm={4}>
          <FormControl type="text"  name="projects" value={this.state.projects} placeholder="" onChange={this.onChange} step="0.01" />
          </Col >
          <FormControl.Feedback />
          
                 </FormGroup>
            
            <FormGroup controlId="formBasicText">
          <Col componentClass={ControlLabel} sm={3}>Internship Duration(in yr)</Col>
          <Col sm={3}>
          <FormControl
            type="text" value={this.state.internship} name="internship" placeholder="" onChange={this.onChange} step="0.01" />
          </Col >
          <FormControl.Feedback />
               
          <Col componentClass={ControlLabel} sm={2}>Research paper</Col>
          <Col sm={4}>
          <FormControl 
            type="text" name="research"
            value={this.state.research}
            placeholder=""
            onChange={this.onChange} step="0.01" />
            </Col >
          <FormControl.Feedback />
                 </FormGroup>

            


          <center>  <button type="submit" class="btn btn-default">Calculate</button>
  </center>  

        </div>
      </Form>
      </div>
    );
  }
}

export default form;
