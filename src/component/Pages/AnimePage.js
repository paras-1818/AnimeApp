import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";

class AnimePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let animeId = window.location.href.split("?id=")[1];
    let response = await fetch(
      `https://ghibliapi.herokuapp.com/films/${animeId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    this.setState({ ...this.state, data: await response.json() });
  }
  render() {
    console.log("specific anime=====", this.state.data);
    return (
      <div>
        <NavBar />
        <center>
          <h1 className="my-3">Anime Details</h1>
        </center>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={this.state.data.image} width="300px" height="300px" />
            </div>
            <div className="col-md-8">
              <div className="Original name">
                <div>
                  <b>Original Name: </b>
                  {this.state.data.original_title}
                </div>
              </div>
              <div className="title my-3">
                <div>
                  <b>Title: </b>
                  {this.state.data.title}
                </div>
              </div>
              <div className="description my-3">
                <div>
                  <b>Description: </b>
                  {this.state.data.description}
                </div>
              </div>
              <div className="director my-3">
                <div>
                  <b>Director: </b>
                  {this.state.data.director}
                </div>
              </div>
              <div className="producer my-3">
                <div>
                  <b>Producer: </b>
                  {this.state.data.producer}
                </div>
              </div>
              <div className="release date my-3">
                <div>
                  <b>Release-Date: </b>
                  {this.state.data.release_date}
                </div>
              </div>
              <div className="running time my-3">
                <div>
                  <b>Running Time: </b>
                  {this.state.data.running_time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimePage;
