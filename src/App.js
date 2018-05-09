import React, { Component } from 'react';
import './App.css';
import {  Link } from "react-router-dom";
import oxford from './oxford.jpg';
import Abc from './Abc';
import mit from './MIT.jpg';
import stanford from './stanford.jpg';
import camb from './camb.jpg';
import footer from '../src/footer.js';
import { Carousel,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';


class App extends Component {
  render() {
  

    return (
    <div class="ma">
    <Abc />

      <div class="container caro">
      <Carousel>
      
        <Carousel.Item>
          <img  src={oxford}  />
          <Carousel.Caption>
            <h3>Oxford University</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={mit}  />
          <Carousel.Caption>
            <h3>MIT</h3>    
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img  src={stanford} />
          <Carousel.Caption>
            <h3>Stanford University</h3>
            </Carousel.Caption>
        </Carousel.Item>
       
       <Carousel.Item>
          <img  src={camb} />
          <Carousel.Caption>
            <h3>Cambridge University</h3>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 </div> 
 <div class="container main">
<h2> What are the categorization of graduate schools </h2>
<p> We have split the schools/universities under three sections, Tough, Medium and Safe. 
The classification is done based on your GRE score and acceptance rate of these schools. </p>

<h3> Tough </h3>
<p> These schools are top ranked and most difficult to get admission into. 
These colleges expect students to have a relatively high GRE score and have a low acceptance rate (5% - 14%). 
It is difficult to get admission into these schools, but not impossible. Sometimes a moderate GRE score with a 
very good Statement of Purpose (SOP), excellent undergraduate credentials with some work experience can help you sail
through easily </p>

<h3> Moderate </h3>
<p>The universities under this classification do not require very high GRE score and acceptance rate is above 30%, 
which translates to a better chances when applying. </p>

<h3> Safe </h3>
<p> 

The universities are relatively easy to get in, do not have a high GRE score requirement and have a
 high acceptance rate. These will not be the top ranked universities </p>

 <p>
 <b> No Minimum Score required:</b> You might be surprised to find some of the most competitive and top ranked US universities 
 in this list. These universities and colleges have specified no minimum GRE or GMAT score because they look at the 
 complete application, your background, experience, essays/SOP and extracurricular/sports achievement. 
 All this is considered by admission officer when looking at your application packet
 </p>

 <h3> How can the classification of schools help me ?</h3>
 <p> The results are a broad suggestion as to where you could be best fit. You may want to consider the colleges based 
 n rankings, tuition, location and the specialization offered. Click on the college name to find out details about the 
 college, graduation rate, domestic/international student ratio, male female ratio, scholarship and financial offered, career path of graduates and the industry alumni are working in (powered by linked in).
 The social media feed from these universities will help keep abreast of latest news, events, vidoes.  </p>
</div>


       </div>

    );
  }
}

export default App;

