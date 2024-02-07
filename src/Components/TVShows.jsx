import React, { Component } from 'react'
import Filmbar from './Filmbar'
import '../style/style.css'

class TVShows extends Component {
  render() {
    return (
         <div>
          <h1 className='mx-4'>SERIE TV PER TE</h1>
        <h2>Consigliati per te:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Breaking bad"}/>
        <h2>Suggerimenti:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Homeland"}/>
        <h2>Tendenze:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"Big bang"}/>
        <h2>Altro:</h2>
        <Filmbar currentUser={this.props.currentuserName} queryParam={"The Matrix"}/> 

      </div>
    )
  }
}

export default TVShows
