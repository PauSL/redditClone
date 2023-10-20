import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//THEME LOGOS//

import sport from '../assets/img/sport.svg';
import busi from '../assets/img/busi.svg';
import game from '../assets/img/game.svg';
import music from '../assets/img/music.svg';
import tv from '../assets/img/tv.svg';

//RESOURCE LOGOS//

import reslogo from '../assets/img/reslog.svg';
import tool from '../assets/img/tool.svg';
import speaker from '../assets/img/speaker.svg';
import book from '../assets/img/book.svg';


const SideBar = () =>  {
    return (
        <StyledSideBar>
            <TopLiners />
            <Sections className="TOPICS">
                <h2>TOPICS</h2>
                <Item>
                    <img src={game} alt="game" />
                    <h3>Videogames</h3>
                </Item>
                <Item>
                    <img src={sport} alt="sport" />
                    <h3>Sports</h3>
                </Item>
                <Item>
                    <img src={music} alt="music" />
                    <h3>Music</h3>
                </Item>
                <Item>
                    <img src={busi} alt="bussiness" />
                    <h3>Bussiness</h3>
                </Item>
                <Item>
                    <img src={tv} alt="tv" />
                    <h3>Television</h3>
                </Item>
                <span>See more</span>
            </Sections>
            <TopLiners />
            <Sections>
                <h2>RESOURCES</h2>
                <Item>
                    <img src={reslogo} alt="about" />
                    <h3>About Reddit</h3>
                </Item>
                <Item>
                    <img src={book} alt="blog" />
                    <h3>Television</h3>
                </Item>
                <Item>
                    <img src={speaker} alt="add" />
                    <h3>Advertisment</h3>
                </Item>
                <Item>
                    <img src={tool} alt="tools" />
                    <h3>Tools</h3>
                </Item>
                <span>See more</span>
            </Sections>
        </StyledSideBar>
    )
}


export default SideBar;


const StyledSideBar = styled(motion.div)`
    position: fixed;
    width: 400px;
    height: 100%;
    padding: 20px;
    border-right: 1px solid #e8ebec;
    background-color: #fff;
`

const TopLiners = styled(motion.div)`
            position: relative;
            margin-top: 2rem;
            margin-bottom: 1rem;
            width: 12.5rem;
            margin-left: 13rem;
            height: 1px;
            background: #c6c7c7;
`

const Sections = styled(motion.div)`
        padding-right: 2rem;
        padding-left: 2rem;
        margin-left: 50%;
        padding-bottom: 1rem;

        h2 {
            margin-bottom: 10px;
            font-weight: lighter;
            font-size: 0.8rem;
            color: #969696;
        }
        span {
            font-size: 0.8rem;
            font-weight: 300;
        }
        `

const Item = styled(motion.div)`

    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 20px; // adjust if needed
        margin-right: 10px;
    }

    span {
        font-size: 14px;
    }
    h3 {
        font-weight: lighter;
        font-size: 1rem;
        color: #797979;
    }

`