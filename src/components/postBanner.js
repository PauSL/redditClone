import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import adown from '../assets/img/adown.svg';
import aup from '../assets/img/aup.svg';

const PostBanner = () => {
    const [activeDrop, setActiveDrop] = useState(null);
    return (
        <>
        <StyledPostBanner>
            <div className="banner-content">
                <button>Publish Something</button>
                <div className="bitem">
                    <Bitem 
                    active={activeDrop}
                    onClick={() => activeDrop === 'trendrop' ? setActiveDrop(null) : setActiveDrop('trendrop') } >
                        <div className="trendrop">
                        <span>On trend</span>
                        <img src={activeDrop === 'trendrop' ? aup : adown } alt="dd" />
                        </div>
                        {activeDrop === 'trendrop' && (
                        <BdropDown>
                        <ul>
                            <li className="lit">Order As</li>
                            <li>Best</li>
                            <li>Standing Out</li>
                            <li>Newest</li>
                            <li>Most Voted</li>
                            <li>On Trend</li>
                        </ul>
                        </BdropDown>
                        )}
                    </Bitem>
                    <Bitem 
                    active={activeDrop}
                    onClick={() => activeDrop === 'lendrop' ? setActiveDrop(null) : setActiveDrop('lendrop') } >
                        <div className="lendrop">
                        <span>Spain</span>
                        <img src={activeDrop === 'lendrop' ? aup : adown } alt="dd" />
                        </div>
                    {activeDrop === 'lendrop' && (
                    <BdropDown2>
                        <ul>
                            <li className="lit">Order As</li>
                            <li>Around the World</li>
                            <li>United States</li>
                            <li>Italy</li>
                            <li>France</li>
                            <li>Canada</li>
                            <li>Netherlans</li>
                            <li>India</li>
                            <li>South Africa</li>
                            <li>Chile</li>
                            <li>Brasil</li>
                            <li>Great Britain</li>
                            <li>Ireland</li>
                            <li>Argentina</li>
                            <li>Nigeria</li>
                            <li>Bulgaria</li>
                        </ul>
                    </BdropDown2>
                    )}
                     </Bitem>
                </div>
            </div>
        </StyledPostBanner>   
        </>
    )
};

export default PostBanner

const StyledPostBanner = styled(motion.div)`

        width: 100%;
        margin-left: 0rem;
        padding: 0rem 0rem;
        margin-bottom: 2rem;
        button {
            display: none;
            background: transparent;
            border: 1px solid black;
            padding: 1rem 2rem;
            border-radius: 5rem;
            &:hover{
                background: black;
                color: white;
                cursor: pointer;
            }

        }
        .banner-content {
            display: flex;
            align-items: center;
        }
        .bitem {
            display: flex;
        }

    @media screen and (min-width: 1024px) { 
        width: 50%;
        margin-left: 4rem;
        padding: 0rem 2rem;
        margin-bottom: 1rem;
        button {
            display: flex;
            background: transparent;
            border: 1px solid black;
            padding: 1rem 2rem;
            border-radius: 5rem;
            &:hover{
                background: black;
                color: white;
                cursor: pointer;
            }
        }
        .banner-content {
            display: flex;
            align-items: center;
        }
        .bitem {
            display: flex;
            margin-left: auto;
        }
    }
`;


const Bitem = styled(motion.div)`


    .trendrop {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 5rem;
        background: ${props => props.active === 'trendrop' ? '#e7e7e7;' : 'transparent'};
        &:hover{
            cursor: pointer;
            background: #e7e7e7;
        }
    }

    .lendrop {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 5rem;
        background: ${props => props.active === 'lendrop' ? '#e7e7e7;' : 'transparent'};
        &:hover{
            cursor: pointer;
            background: #e7e7e7;
        }
    }

    img{
        width: 20px;
        height: 20px;
    }
    span {
        color: #5c5c5c;
        font-size: 1rem;
        margin-right: 0.8rem;
    }

`;


const BdropDown = styled(motion.div)`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 8rem;
    height: 18.5rem;
    position: absolute;
    box-shadow: 1px 1px 6px #555;
    background: white;
    z-index: 200;
    ul {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
        font-size: 0.9rem;
        color: #555555;
        padding: 1rem 1rem;
        &:hover{
            background: #e7e7e7;
            cursor: pointer;
        }
    }
    .lit {
        color: black;
        font-size: 1rem;
        font-weight: bold;
        &:hover{
            background: transparent;
        }
    }
`

const BdropDown2 = styled(motion.div)`
    display: flex;
    margin-top: 10px;
    width: 10rem;
    height: 20rem;
    position: absolute;
    box-shadow: 1px 1px 6px #555;
    background: white;
    z-index: 200;
    overflow-y: auto;
    ul {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
        font-size: 0.9rem;
        color: #555555;
        padding: 1rem 1rem;
        &:hover{
            background: #e7e7e7;
            cursor: pointer;
        }
    }
    .lit {
        color: black;
        font-size: 1rem;
        font-weight: bold;
        &:hover{
            background: transparent;
        }
    }
`
