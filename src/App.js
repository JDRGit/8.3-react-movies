import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

export default function App() {
  //variable with your apiKey
  const apiKey = "1bb902b0";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to fetch a random movie on each page refresh
  useEffect(() => {
    // function to fetch a random movie
    const fetchRandomMovie = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=random`);
        const data = await response.json();
        setMovie(data);
      } catch (e) {
        console.error(e);
      }
    };

    // call the function to fetch the random movie
    fetchRandomMovie();
  }, []); // the empty array ensures that the effect only runs on the first render

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )};
