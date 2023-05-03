import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard";
import { SEARCH_URL, API_KEY } from "../tmdb";
import styled from "styled-components";

const searchURL = SEARCH_URL
const apiKey = API_KEY

const Container = styled.div`
    color: #fff;
    font-size: 1.5rem;
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

const QueryText = styled.div`
  
`;

function Search() {
    const [searchParams] = useSearchParams();
  
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");
  
    const getSearchMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();   
  
      setMovies(data.results)
    };
      
    useEffect(() => {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchMovies(searchWithQueryURL);
    }, [query]);
  
    return (
      <Container>
        <Title>Resultados para: <QueryText>{query}</QueryText></Title>
        <MoviesContainer>
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </MoviesContainer>
      </Container>
    );
  }
  
  export default Search;
  