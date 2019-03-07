import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';


class MoviesList extends PureComponent {
  state = {
    movies: []
  }
  
async componentDidMount() {
  try {
    const res = await  fetch('https://api.themoviedb.org/3/discover/movie?api_key=d5a166b0e62f57e8b3e82620c28ef699&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e);
  }
}

render() {
   return (
    <MovieGrid>
      {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}  />)}
    </MovieGrid>  
   );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`;

