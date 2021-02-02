import React from 'react';
import './App.css';
import Map from "./Map"
require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      <h1>Google maps task (:</h1>
      <Map />
      </div>
  )
}


// export default class App extends React.Component {
//   state = {
//     info: {}
//     }

//   async componentDidMount() {
//     const url = 'https://api.ipdata.co/es?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
//       fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.city)
//     this.setState({info: data})
//   })
//   }

//   render () {
//     console.log(this.state.info)
//     let latLag = this.state.info.latitude + ", " + this.state.info.longitude
//     console.log(latLag)
//     return (
//       <div>
//   <h1>GOOGLE MAPS!</h1>
//         <h3>
//           country :
//            {this.state.info.country_name}
//            <br></br>
//           city :  {this.state.info.city}
//         </h3>

//         <iframe
//         width="600"
//         height="450"
//         src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk
//         &center=${latLag}
//           &q=Space+Needle,Seattle+WA`}>
//       </iframe>
//       </div>
//     )
//   }
// }

export default App;