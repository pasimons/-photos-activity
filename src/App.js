import React from "react"
import "./App.css"
import Gallery from "./Gallery/Gallery"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.initialLatitude = "45.051142"
    this.state = {
      latitude: this.initialLatitude,
      longitude: "23.236676",
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
    })
  }
  render() {
    if (this.state.latitude === this.initialLatitude) {
      return (
        <div className="App">
          Using coordinates for Tirga Jiu, Romania
          <Gallery
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            searchTerm="dog"
          />
        </div>
      )
    }
    return (
      <div className="App">
        Using coordinates for your current location
        <Gallery
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          searchTerm="dog"
        />
      </div>
    )
  }
}
export default App

























