import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Abc from '../Abc.js';
import '../css/clg.css';
import axios from 'axios';

class collegedemo extends Component {

	constructor(props) {
    super(props);
    this.state = {
     Studentdemos:[]
         };
  }

componentDidMount() {
    axios.get('/api/index/demo')
      .then(res => {
        this.setState({ Studentdemos: res.data });
        console.log(this.state.Studentdemos);
      });
  }


  onChange = (e) => {
    const state = this.state.index
    state[e.target.name] = e.target.value;
    this.setState({Studentdemos:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { diaplay } = this.state.Studentdemos;

    axios.put('/api/index/demo', { diaplay })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
  

    return (
    <div class="">
    <Abc/>
   

<div class="container">

<table class="table table-striped table-bordered table-success table-sm "  >
<thead class="thead-inverse head" >
    <tr>
        

        <th class="thi"> <center> Prediction </center> </th>
       
        
    
</tr>
</thead>
 <tbody>
                {this.state.Studentdemos.map(Studentdemo =>
                  <tr>
                    <td> <center> {Studentdemo.result} </center> </td>
                 
              
                  </tr>
                )}
              </tbody>
    </table>

    <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <input type="hidden" class="form-control" name="diaplay" value={this.state.diaplay } onChange={this.onChange}  />
              </div>
             <button type="submit" class="btn btn-default">OK</button>
            </form>
</div>


    </div>


    );
}
}

export default collegedemo;