import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';

class AnimePage extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           data: []
        }
      }
      
      async componentDidMount(){
          let animeId = window.location.href.split('?id=')[1];
        let response= await fetch(`https://ghibliapi.herokuapp.com/films/${animeId}`,{
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.setState({...this.state, data: await response.json()});
      }
  render() {
      console.log("specific anime=====", this.state.data)
    return (
      <div>
        <NavBar/>
        <center><h1>Anime Details</h1></center>
        <div className="row">

          <div className="col-md-4">
              <img src={this.state.data.image} width='300px' height= '300px'/>
          </div>
          <div className='col-md-8'>
              <div className='title' >
               <div ><b>Title: </b>{this.state.data.title}</div> 
              </div>
              <div className='description' >
              <div ><b>Description: </b>{this.state.data.description}</div>
              </div>
              <div className='director' >
              <div ><b>Director: </b>{this.state.data.director}</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnimePage