import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { dropDownVariants } from "../animations";

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

//Arrow Icons //

import aup from '../assets/img/aup.svg';
import adown from '../assets/img/adown.svg';
import recentr from '../assets/img/recentr.svg'
import diagarrow from '../assets/img/diagarrow.svg';


const SideBar = () =>  {
    const [activeDropDown, setActiveDropDown] = useState(null);
    return (
        <StyledSideBar>
            <Sections>
            <div className="pop-btn">
                <img src={diagarrow} alt="diagarrow" />
                <h3>Popular</h3>
            </div>
            </Sections>
            <TopLiners />
            <Sections className="LAST-SEARCHS">
                <h2>LAST SEARCHS</h2>
                <Item >
                    <div className="item-content">
                    <img src={recentr} alt="recentsubs" />
                    <h3>r/Mr.Nova</h3>
                    </div>
                </Item>
                <Item >
                    <div className="item-content">
                    <img src={recentr} alt="recentsubs" />
                    <h3>r/Baldurs Gate 3</h3>
                    </div>
                </Item>
                <Item >
                    <div className="item-content">
                    <img src={recentr} alt="recentsubs" />
                    <h3>r/Guitar Lessons</h3>
                    </div>
                </Item>
            </Sections>
            <TopLiners />
            <Sections className="TOPICS">
                <h2>TOPICS</h2>
                <Item onClick={() => activeDropDown === 'videogames' ? setActiveDropDown(null) : setActiveDropDown('videogames')} >
                    <div className="item-content">
                    <img src={game} alt="game" />
                    <h3>Videogames</h3>
                    <img className='arrows' src={activeDropDown === 'videogames' ? aup : adown} alt="arrow" />
                    </div>
                    {activeDropDown === 'videogames' && (
                    <SideDropDown
                    initial='closed'
                    animate={activeDropDown === 'videogames' ? 'open' : 'closed'}
                    variants={dropDownVariants}
                    >
                        <ul>
                            <li>Valheim</li>
                            <li>Genshin impact</li>
                            <li>Minecraft</li>
                            <li>Pokimane</li>
                            <li>Halo infinite</li>
                            <li>Call of Duty: Warzone</li>
                            <li>Path of Exile</li>
                            <li>Hollow Knight: Silksong</li>
                            <li>Escape from Tarkov</li>
                        </ul>
                    </SideDropDown>
                    )}
                </Item>
                <Item  onClick={() => activeDropDown === 'sports' ? setActiveDropDown(null) : setActiveDropDown('sports') } >
                    <div className="item-content">
                    <img src={sport} alt="sport" />
                    <h3>Sports</h3>
                    <img className='arrows' src={activeDropDown === 'sports' ? aup: adown} alt="adown" />
                    </div>
                    { activeDropDown === 'sports' && (
                <SideDropDown
                initial='closed'
                animate={activeDropDown === 'sports' ? 'open' : 'closed'}
                variants={dropDownVariants}
                >
                        <ul>
                            <li>NFL</li>
                            <li>NBA</li>
                            <li>Megan Anderson</li>
                            <li>Atlanta Hawks</li>
                            <li>Los Angeles Lakers</li>
                            <li>Boston Celtics</li>
                            <li>Arsenal F.C</li>
                            <li>Philadelphia 76ers</li>
                            <li>Premiere League</li>
                        </ul>
                    </SideDropDown>
                    )}
                    </Item>
                <Item onClick={() => activeDropDown === 'music' ? setActiveDropDown(null) : setActiveDropDown('music') } >
                    <div className="item-content">
                    <img src={music} alt="music" />
                    <h3>Music</h3>
                    <img className='arrows' src={activeDropDown === 'music' ? aup : adown} alt="adown" />
                    </div>
                    {activeDropDown === 'music' && (
                    <SideDropDown 
                    initial='closed'
                    animate={activeDropDown === 'music' ? 'open' : 'closed'}
                    variants={dropDownVariants}
                    >
                        <ul>
                            <li>Mr.Nova</li>
                            <li>Muse</li>
                            <li>Blink 182</li>
                            <li>Green Day</li>
                            <li>U2</li>
                            <li>Kansas</li>
                            <li>The Killers</li>
                            <li>Keane</li>
                            <li>Boston</li>
                        </ul>
                    </SideDropDown>
                    )}
                </Item>
                <Item onClick={() => activeDropDown === 'bussiness' ? setActiveDropDown(null) :setActiveDropDown('bussiness') } >
                    <div className="item-content">
                    <img src={busi} alt="bussiness" />
                    <h3>Bussiness</h3>
                    <img className='arrows' src={activeDropDown === 'bussiness' ? aup : adown } alt="adown" />
                    </div>
                    {activeDropDown === 'bussiness' && (
                    <SideDropDown
                    initial='closed'
                    animate={activeDropDown === 'bussiness' ? 'open' : 'closed'}
                    variants={dropDownVariants}
                    >
                        <ul>
                            <li>GameStop</li>
                            <li>Moderna</li>
                            <li>Pfzier</li>
                            <li>Johnson</li>
                            <li>Best Buy</li>
                            <li>Space X</li>
                            <li>Tesla</li>
                            <li>Novavax</li>
                            <li>Apple</li>
                        </ul>
                    </SideDropDown>
                    )}
                </Item>
                <Item onClick={() => activeDropDown === 'television' ? setActiveDropDown(null) : setActiveDropDown('television') }  >
                    <div className="item-content">
                    <img src={tv} alt="tv" />
                    <h3>Television</h3>
                    <img className='arrows' src={activeDropDown === 'television' ? aup : adown } alt="adown" />
                    </div>
                    {activeDropDown === 'television' && (
                    <SideDropDown
                    initial='closed'
                    animate={activeDropDown === 'television' ? 'open' : 'closed'}
                    variants={dropDownVariants}
                    >
                        <ul>
                            <li>Late Nate Show</li>
                            <li>La Resistencia</li>
                            <li>Mtv</li>
                            <li>Fox</li>
                            <li>Warner Films</li>
                            <li>National Geographic</li>
                            <li>Movistar Series</li>
                            <li>Hbo</li>
                            <li>CNN</li>
                        </ul>
                    </SideDropDown>
                    )}
                </Item>
                <div className="see-more"><span>See more</span></div>
            </Sections>
            <TopLiners />
            <Sections>
                <h2>RESOURCES</h2>
                <Item>
                    <div className="item-content">
                    <img src={reslogo} alt="about" />
                    <h3>About Reddit</h3>
                    </div>
                </Item>
                <Item>
                    <div className="item-content">
                    <img src={book} alt="blog" />
                    <h3>Television</h3>
                    </div>
                </Item>
                <Item>
                    <div className="item-content">
                    <img src={speaker} alt="add" />
                    <h3>Advertisment</h3>
                    </div>
                </Item>
                <Item>
                    <div className="item-content">
                    <img src={tool} alt="tools" />
                    <h3>Tools</h3>
                    </div>
                </Item>
                <div className="see-more"><span>See more</span></div>
            </Sections>
        </StyledSideBar>
    )
}


export default SideBar;



const StyledSideBar = styled(motion.div)`
    position: fixed;
    width: 400px;
    height: 85%;
    margin-top: 2rem;
    padding: 20px;
    border-right: 1px solid #e8ebec;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
   &::-webkit-scrollbar{
    width: 4px;
    background-color: #fff;
   }
   &::-webkit-scrollbar-thumb{
    background-color: #c0c0c0;
    border-radius: 10rem;
   }
   &::-webkit-scrollbar-button:start {
        display: block;
        height: 0.8rem;  // Adjust this value to increase or decrease the space at the top
        background-color: transparent;  // Make it transparent so it's not visible
    }
    .pop-btn{
        position: relative;
        cursor: pointer;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: right;
        padding: 0rem 7rem;
        background: #e8ebec;
        border-radius: 1rem;
        margin-left: -1.2rem;
        h3{
            font-weight: lighter;
            font-size: 1rem;
        }
        img {
        width: 20px; // adjust if needed
        margin-right: 10px;
        background: transparent;
        }
    }
   
`;


const TopLiners = styled(motion.div)`
            position: relative;
            margin-top: 1rem;
            margin-bottom: 1rem;
            width: 15rem;
            margin-left: 10rem;
            height: 1px;
            background: #c6c7c7;
`

const Sections = styled(motion.div)`
        margin-top: 2rem;
        padding-right: 4rem;
        padding-left: 0rem;
        margin-left: 45%;
        h2 {
            margin-bottom: 10px;
            font-weight: lighter;
            font-size: 0.7rem;
            color: #969696;
        }
        span {
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: 300;
        }
        .see-more {
            margin-top: 1rem;
        }
        `

const Item = styled(motion.div)`
    cursor: pointer;
    margin-bottom: 0rem;
    width: 12rem;
    .item-content{
        display: flex; 
        align-items: center;
    }

    img {
        width: 20px; // adjust if needed
        margin-right: 10px;
    }
    .arrows {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
    }

    h3 {
        font-weight: lighter;
        font-size: 1rem;
        color: #636363;
    }

`;

const SideDropDown = styled(motion.div)`
    position: relative;
    margin-top: -1rem;
    border-left: 1px solid #e8ebec;
    margin-left: 0.5rem;
    overflow: hidden;
    z-index: 10;
    li{
        list-style: none;
        font-weight: lighter;
        font-size: 0.9rem;
        color: #797979;
        line-height: 2.5rem;
    }
`;