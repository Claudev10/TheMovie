import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import styled from "styled-components";

const Navbars = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    h2, a {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    form {
        display: flex;        
        gap: .5rem;

        button {
            background-color: #f7d354;
            border: 2px solid #f7d354;
            display: flex;
            border-radius: 4px;
            padding: .3rem;
            font-size: 1.3rem;
            align-items: center;
            cursor: pointer;
            transition: .4s;
        }

        button:hover {
            background-color: transparent;
            color: #f7d354
        }
    }

    input {
        padding: 0.2rem 0.8rem;
        border: none;
        border-radius: 4px;
    }
`

function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return 

        navigate(`/search?q=${search}`);
        setSearch("");
    };    

    return (
        <Navbars>
            <h2>
                <Link to='/'><BiCameraMovie />TheMovies</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
                />                
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </Navbars>
    )
}

export default Navbar;