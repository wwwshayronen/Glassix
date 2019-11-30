import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  state = {
    info: {}
    }

  async componentDidMount() {
    const url = 'https://api.ipdata.co/es?api-key=f32a743406673341f02b34a07d2d304d3275bfeb71c3f7a4b9ddd2ef'
      fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data.city)
    this.setState({info: data})
  })
  }

  render () {
    console.log(this.state.info)
    let latLag = this.state.info.latitude + ", " + this.state.info.longitude
    console.log(latLag)
    return (
      <div>
  <h1>GOOGLE MAPS!</h1>
        <h3>
          country :
           {this.state.info.country_name}
           <br></br>
          city :  {this.state.info.city}
        </h3>

        <iframe
        width="600"
        height="450"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk
        &center=${latLag}
          &q=Space+Needle,Seattle+WA`}>
      </iframe>
      </div>
    )
  }
}
