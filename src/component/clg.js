import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Abc from '../Abc.js';
import '../css/clg.css';
import axios from 'axios';

class clg extends Component {

	constructor(props) {
    super(props);
    this.state = {
     Students:[]
         };
  }

componentDidMount() {
    axios.get('/api/index')
      .then(res => {
        this.setState({ Students: res.data });
        console.log(this.state.Students);
      });
  }


  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({Students:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { diaplay } = this.state.Students;

    axios.put('/api/index', { diaplay })
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
                {this.state.Students.map(Student =>
                  <tr>
                    <td> <center> {Student.result} </center> </td>
                 
              
                  </tr>
                )}
              </tbody>
    </table>

    <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <input type="hidden" class="form-control" name="diaplay" value={this.state.diaplay } onChange={this.onChange} placeholder="ISBN" />
              </div>
             <button type="submit" class="btn btn-default">OK</button>
            </form>
</div>


    </div>


    );
}
}

export default clg;