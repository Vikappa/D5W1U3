import React, { Component } from 'react'
import './filmItemsCSS.css'

class FilmItem extends Component {
  preventDragHandler = (e) => {
    e.preventDefault()
  }

  render() {
    let posterUrl = this.props.film.Poster !== "N/A" ? this.props.film.Poster : "https://http.cat/404"
    return (
      <div className="film-item">
        
        <img 
          src={posterUrl} 
          alt="Locandina film"
          onDragStart={this.preventDragHandler} 
        />
      </div>
    )
  }
}

export default FilmItem
