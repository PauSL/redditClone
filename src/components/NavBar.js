import React, { useState } from "react";
import styled from "styled-components";
import Rlogo from '../assets/img/Rlogo.svg';
import search from '../assets/img/search.svg';
import { motion } from "framer-motion";
import appdwn from '../assets/img/appdwn.svg';
import dots from '../assets/img/dots.svg';
import burger from '../assets/img/burger.svg';
import backarrow from '../assets/img/backarrow.svg';

const NavBar = ( { onSearch, searchTerm, toggleSidebar }) => {

    const [movSearch, setMovSearch] = useState(null);

    const hanlderSearchChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <>
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
                    <input 
                    type="text" 
                    name="q" 
                    placeholder="Search Reddit" 
                    autoComplete="off"
                    value={searchTerm}
                    onChange={hanlderSearchChange} 
                    inputMode /> 
                </span> 
            </div>
            <div className="buttons">
            <button className="appbt"><img src={appdwn} alt="dwn"/>Download App</button>
            <button className="logbt" >Loggin In</button>
            </div>
         </div>
         <div className="bottom-line"></div>
        </StyledNav>
        <MobileNav>
        <div className="nav-component">
            <div className="nav-logo">
            <img
            onClick={toggleSidebar}
            className="burger" src={burger} alt="brg" />   
            <img  className="rlogo" src={Rlogo} alt="logo" />
            </div>
            <div className="buttons">
                <button className="logbt" >Loggin In</button>
                    <span className="search-icon">
                        <img 
                        onClick={() => setMovSearch(!movSearch)}
                        src={search} alt="glass" />
                    </span>
                    <img className="dott" src={dots} alt="dts" />
            </div>
         </div>
         <div className="bottom-line"></div>
        </MobileNav>
        {movSearch && (
        <MovSearch>
        <div className="search-bar2">
            <div className="glasin">
                <img 
                onClick={() => setMovSearch(!movSearch)}
                className='bkar' src={backarrow} alt="bka" />
                <img src={search} alt="glass" />
                <input 
                    type="text" 
                    name="q" 
                    placeholder="Search Reddit" 
                    autoComplete="off"
                    value={searchTerm}
                    onChange={hanlderSearchChange} 
                    inputMode 
                    /> 
            </div>
        </div>
        </MovSearch>
        )}
        </>
    )
};

export default NavBar;


const StyledNav = styled(motion.div)`
    
    display: none;

    @media screen and (min-width: 1024px) {
        display: inline;
        background: white;
        position: fixed;
        top: 0;
        margin-top: -1.2rem;
        width: 100%;
        z-index: 5;
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
            margin-right: 0rem;
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
            padding-left: 1rem;
            margin-left: 10rem;
            border-radius: 2rem;
            background: #e8ebec;
            display: flex;
            align-items: center;
            input {
                width: 40rem;
            }
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

        .buttons {
            display: flex;
        }

        .logbt {
            background: #d93a00;
            border: none;
            font-weight: bold;
            padding: 0.8rem 2rem;
            border-radius: 2rem;
            color: white;
            margin-left: 2rem;
            margin-right: 5rem;
        }

        .appbt {
            display: flex;
            align-items: center;
            background: #e8ebec;
            border: none;
            font-weight: bold;
            padding: 0.8rem 2rem;
            border-radius: 2rem;
            color: #000000;
            &:hover{
                background: #d2dadd;
            }
            img{
                margin-right: 5px;
                height: 20px;
                width: 20px;
            }
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
    }

`

const MobileNav = styled(motion.div)`
        position: fixed;
        background: white;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0.5rem 0.7rem;
        z-index: 5;
        .nav-component {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
        }
        .nav-logo {
            display: flex;
            align-items: center;
            .rlogo{
                width: 45px;
                height: 45px;
            }
            .burger {
            margin-right: 0.5rem;
            width: 35px;
            height: 35px;
         }
        
        }

        .input-search input {
            border: none;
            outline: none;
            background: none;
        }

        .search-icon img {
            width: 25px;
            height: 25px;
        }

        .buttons {
            display: flex;
            align-items: center;
            margin-right: 1.2rem;
        }

        .logbt {
            background: #d93a00;
            border: none;
            font-weight: bold;
            padding: 0.7rem 1rem;
            border-radius: 2rem;
            color: white;
            margin-right: 1.2rem;
        }

        .bottom-line {
            display: flex;
            background: #e8ebec;
            width: 100%;
            margin-top: 0.5rem;
            height: 1.5px;
        }

       .dott {
        margin-left: 1.2rem;
        margin-right: 0.8rem;
        width: 15px;
        height: 15px;
    }

@media screen and (min-width: 1024px) {
    display: none;
}


`

const MovSearch = styled(motion.div)`

    .search-bar2 {
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
        z-index: 10;
        width: 100%;
        background: white;
        border-bottom: 2px solid #e8ebec;
    }
    .glasin {
        display: flex;
        align-items: center;
        right: 0;
        width: 100%;
        input {
            z-index: 20;
            width: 60%;
            margin-left: 0rem;
            outline: none;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
        }
        img {
            align-items: center;
            width: 25px;
            height: 25px;
        }
        .bkar{
            display: flex;
            align-items: center;
            margin-right: 1.5rem;
            width: 45px;
            height: 45px;
            background: transparent;
        }
    }




    @media screen and (min-width: 1024px) {
    display: none;
}

`;