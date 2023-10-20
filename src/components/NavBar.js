import React from "react";
import styled from "styled-components";
import Rlogo from '../assets/img/Rlogo.svg';
import search from '../assets/img/search.svg';
import { motion } from "framer-motion";

const NavBar = () => {
    return (
        <StyledNav>
         <div className="nav-component">
            <div className="nav-logo">
            <img src={Rlogo} alt="logo" />
            <h4>reddit</h4>
            </div>
            <div className="search-bar">
                <span className="search-icon">
                    <img src={search} alt="glass" />
                </span>
                <span className="input-search" >
                    <input type="text" name="q" placeholder="Search Reddit" autoComplete="off" inputMode /> 
                </span> 
            </div>
            <button>Loggin In</button>
         </div>
         <div className="bottom-line"></div>
        </StyledNav>
    )
};

export default NavBar;


const StyledNav = styled(motion.div)`
    position: sticky;
    top: 0;
    margin-top: -1.5rem;
    width: 100%;
    overflow: hidden;
    .nav-component {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2rem;
        margin: 0 auto;
        width: 100%;
    }
    .nav-logo {
        display: flex;
        align-items: center;
        margin-right: 10rem;
        img {
            width: 45px;
            height: 45px;
        }
        h4 {
            font-size: 1.5rem;
            font-weight: 600;
            font-family: 'Signika', sans-serif;
        }
    }

    .search-bar {
        padding: 0.7rem 0rem;
        padding-right: 30rem;
        padding-left: 1rem;
        border-radius: 2rem;
        background: #e8ebec;
        display: flex;
        align-items: center;
    }

    .input-search input {
        border: none;
        outline: none;
        background: none;
    }

    .search-icon img {
        width: 20px;
        height: 20px;
    }
    button {
        background: #d93a00;
        border: none;
        font-weight: bold;
        padding: 0.8rem 2rem;
        border-radius: 2rem;
        color: white;
        margin-left: 5rem;
        margin-right: 5rem;
    }
    button:hover {
        cursor: pointer;
        background: #a02b00;
    }
    .bottom-line {
        display: flex;
        background: #e8ebec;
        width: 100%;
        margin-top: -1rem;
        height: 1.5px;
    }
`