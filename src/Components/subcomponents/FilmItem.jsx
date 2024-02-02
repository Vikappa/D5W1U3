import React, { Component } from 'react';
import './filmItemsCSS.css';

class FilmItem extends Component {
  // Funzione per prevenire il drag delle immagini
  preventDragHandler = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.props);
    let posterUrl = this.props.film.Poster !== "N/A" ? this.props.film.Poster : "https://http.cat/404";
    return (
      <div className="film-item">
        <img 
          src={posterUrl} 
          alt="Locandina film"
          onDragStart={this.preventDragHandler} // Previene il drag
        />
      </div>
    );
  }
}

export default FilmItem;
