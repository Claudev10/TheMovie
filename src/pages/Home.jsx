import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../tmdb";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";

const moviesURL = BASE_URL;
const apiKey = API_KEY;

const Container = styled.div`
    color: #fff;
    font-size: inherit;
    text-align: center;
    margin: 2rem 0 1rem;
`;

const Title = styled.div`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: auto;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 2.5rem;
    
`;

const StyledMovieCard = styled(MovieCard)`
  width: 30%;
  min-height: 350px;

  img {
    width: 100%;
  }
`;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();   
    
    setTopMovies(data.results)
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container>
      <Title>Melhores Filmes:</Title>
      <MoviesContainer>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
            topMovies.map((movie) => {
            return <StyledMovieCard key={movie.id} movie={movie} />;
            })}
      </MoviesContainer>
    </Container>
  );
}

export default Home;
