import React, { Component } from 'react'
import Filmbar from './Filmbar'
class Body extends Component {
  render() {
    return (
         <div>
        <h2>Consigliati per te:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Harry Potter"}/>
        {/* <h2>Suggerimenti:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Blade Runner"}/>
        <h2>N°1 in Italia:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Star Wars"}/>
        <h2>Altro:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"The Matrix"}/> */}
      </div>
    )
  }
}

export default Body;
