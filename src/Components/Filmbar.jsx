import React, { Component } from 'react';
import FilmItem from './subcomponents/FilmItem'
class Filmbar extends Component {
    status = {
        loading: true,
        error: null,
        filmArray: [],
        queryParam: this.props.queryParam,
        currentUser: this.props.currentUser
    }

    riformattaInput(input) {
        return input.replace(/\s/g, "+")
    }

    fetchFilmFromQueryParam = async (param) => {
        fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${param}&page=10`)
        .then(response => {
          if (!response.ok) { 
            this.status.error = true
            throw new Error('Errore di connessione')
          }
          return response.json()
        })
        .then(data => {
            this.status.error = false
            this.status.filmArray = data.Search
            this.status.loading = false
          console.log(this.status)
        })
        .catch(error => {
          console.log('There was a problem with your fetch operation:', error)
        });
    }
    componentDidMount() {
        let param = this.riformattaInput(this.props.queryParam)
        this.fetchFilmFromQueryParam(param)
      }

  render() {

    return (
      <div>
        {this.status.filmArray.map((film, index) => {
          return (
            <div key={index}>
            <FilmItem film={film}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Filmbar