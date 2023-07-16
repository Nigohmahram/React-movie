import React from "react"
import Movies from "../component/Movies"
import Loader from "../component/Loader"
import Search from "../component/Search"

export default class Main extends React.Component {
      state = {
            movies: []
      }
      componentDidMount() {
            fetch('http://www.omdbapi.com/?apikey=3d094372&s=panda')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
      }
      searchMovies = (str, type = 'all') => {
            fetch(`http://www.omdbapi.com/?apikey=3d094372&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
      }

      render(){
            return (
                  <div className="container content">
                  <Search searchMovies={this.searchMovies}/>
                  {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader />}
                  </div>
            )
      }
}