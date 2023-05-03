import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs"
import { BASE_URL, API_KEY } from "../tmdb";
import BackCard from "../components/BackCard";
import styled from "styled-components";


const moviesURL = BASE_URL;
const apiKey = API_KEY;

const Container = styled.div`  
  margin: 1rem auto;
  color: #fff;
  display: flex;
  flex-direction: column;  

  svg {
    font-size: 1.5rem;
    color:#f7d354
  }

`;

const Tagline = styled.div`
  font-size: 1.2em;
  margin-bottom: 1em;
  margin-left: 1em;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  margin-left: 1em;
  h3 {
    margin-right: 0.5em;
  }
`;

const InfoDescription = styled.div`
  margin-top: 1em;
  margin-left: 1em;
  h3 {
    margin-bottom: 0.5em;
  }
  p {
    line-height: 1.5;
  }
`;

function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieUrl);
    }, [id]);

    if (movie && movie.backdrop_path) {
        movie.poster_path = movie.backdrop_path;
    }

    return (
        <Container>
            {movie && (
                <>                    
                        <BackCard                            
                            movie={movie}
                            showLink={false}
                            backdropPath={movie.poster_path}                            
                        />
                    
                    <Tagline>{movie.tagline}</Tagline>
                    <Info>
                        <h3><BsWallet2 style={{color: '#f7d354'}}/> Orçamento: </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </Info>
                    <Info>
                        <h3><BsGraphUp style={{color: '#f7d354'}}/> Receita: </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </Info>
                    <Info>
                        <h3><BsHourglassSplit style={{color: '#f7d354'}}/> Duração: </h3>
                        <p>{movie.runtime} minutos</p>
                    </Info>
                    <InfoDescription>
                        <h3><BsFillFileEarmarkTextFill style={{color: '#f7d354'}}/> Descrição: </h3>
                        <p>{movie.overview}</p>
                    </InfoDescription>                   
                </>
            )}
        </Container>
    )
}

export default Movie