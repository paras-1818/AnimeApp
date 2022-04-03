//  anime card will come here
import React, { Component } from 'react'

class AnimeCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
      console.log(this.props);
    return (
      <div>
        <div className="card" style={{width: '18em'}}>
  <img src={this.props.data.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.data.title}</h5>
    <p className="card-text">{this.props.data.description.substring(0,50)}</p>
    <a href={`/animePage?id=${this.props.data.id}`} className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
export default AnimeCard
