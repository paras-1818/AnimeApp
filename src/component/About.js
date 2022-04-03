import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";

class About extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <center className="my-3"><h1>My Contact Info</h1></center>
      <div class='container'>
        <div className= "row">
          <div className="col-md-4">
          <img src={require ('../paras.jpg')} width='300px' height= '300px'/>
          </div>
          <div className='col-md-8' width='300px' height='300px'>
              <div className='Name my-3' >
               <div ><b>Name: </b> Paras Meena</div> 
              </div>
              <div className='College my-3' >
              <div ><b>College: </b>Indian Institute of Technology Kharagpur</div>
              </div>
              <div className='Email my-3' >
              <div ><b>EmailId: </b>paraskr098@gmail.com</div>
              </div>
              <div className='Role my-3' >
              <div ><b> Role: </b>Front-End Web Developer</div>
              </div>
              <div className='skills my-3' >
              <div ><b>Skills: </b>React and JavaScript</div>
              </div> 
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
