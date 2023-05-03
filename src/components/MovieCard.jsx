import React from "react";
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { IMG_URL } from "../tmdb";
import styled from "styled-components";

const imageUrl = IMG_URL

const MoviesCard = styled.div`
    width: 30%;
    margin-bottom: 2.5rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;

    img, h2, p {
        margin-bottom: 1rem    
    }    
`
const StarIcon = styled(FaStar)`
    color: yellow;
`;

const LinkButton = styled(Link)`
  background-color: #f7d354;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: bold; 

  &:hover {
    background-color: #f0c646;
    color: white;
  }
`;

function MovieCard ({movie, showLink = true}) {
    return (
        <MoviesCard>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><StarIcon/> {movie.vote_average.toFixed(1)}</p>
            {showLink && <LinkButton to={`movie/${movie.id}`}>Detalhes</LinkButton>}
        </MoviesCard>
    )
}

export default MovieCard