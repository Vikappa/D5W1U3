import React, { Component } from 'react'
import Filmbar from './Filmbar'
import '../style/style.css'
class Body extends Component {
  render() {
    return (
         <div>
        <h2>Consigliati per te:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Harry Potter"}/>
        <h2>Suggerimenti:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Star Wars"}/>
        <h2>Tendenza:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Paura"}/>
        <h2>Altro:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"The Matrix"}/> 
      </div>
    )
  }
}

export default Body;
