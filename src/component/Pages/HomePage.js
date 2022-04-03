import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import AnimeCard from "../AnimeCard/AnimeCard";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let response = await fetch("https://ghibliapi.herokuapp.com/films", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ ...this.state, data: await response.json() });
  }
  render() {
    return (
      <div clasName="container my-3">
        <NavBar />

        <center>
          <h1>Animes</h1>
        </center>
      <div div className="row">
        {this.state.data.map((item, index) => (
          <div className="col-md-4">
            <AnimeCard data={item} />
          </div>

        ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
