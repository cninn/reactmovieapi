import React from "react";
import "./Tailwind.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";


class App extends React.Component {
  state = {
    movies: [],
    findMovie: "", 
  };
  

  async componentDidMount(){
    //!tmdb my movie list
    const response = await fetch(`https://api.themoviedb.org/3/list/8275714?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await response.json();
    console.log(data.items);

    this.setState({movies:data.items});
    

  }



  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    const findMovie = event.target.value.toLowerCase(); // Arama metnini küçük harfe çevir
    this.setState({ findMovie });
  };

  render() {
    const findMovie = this.state.findMovie.toLowerCase(); // State içindeki arama metnini küçük harfe çevir

    let filteredMovies = this.state.movies.filter((f) => {
      
      return f.title.toLowerCase().indexOf(findMovie) !== -1; // Her ikisini de küçük harfle karşılaştır
    });

    return (
      <main className="app">


          {filteredMovies.length > 0 ? null : (
              //?css ile uygun şekilde özelleştirebilirsiniz.
            <h1 className="filter-warning">Aradığınız kriterlere uygun film bulunamadı</h1>
          )}
      


        <Navbar searchMovieProp={this.searchMovie} />

        <div className="flex bg-[#ffd60a] ">
          <Card movies={filteredMovies} deleteProps={this.deleteMovie} />
       
        </div>
      </main>
    );
  }
}

export default App;
