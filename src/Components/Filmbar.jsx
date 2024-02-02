import React, { Component } from 'react';
import FilmItem from './subcomponents/FilmItem'
class Filmbar extends Component {
    state = {
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
      
        fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${param}&page=2&type=movie`)
        .then(response => {
          if (!response.ok) { 
            throw new Error('Errore di connessione')
          }
          return response.json()
        })
        .then(data => {
            this.setState({
                error: false,
                loading: false,
                filmArray: data.Search,
              })
        })
        .catch(error => {
          console.log('Errore con la fetch:', error)
          this.setState({
          error: true,
          loading: false
        })
        })
    }

    componentDidMount() {
        let param = this.riformattaInput(this.props.queryParam)
        this.fetchFilmFromQueryParam(param)
      }

  render() {

    return (
      <div className='d-flex'>
        {this.state.filmArray.map((film, index) => {
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