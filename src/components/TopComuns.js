import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import comreddit from '../assets/img/comreddit.svg';

function TopComuns() {
    const [showAll, setShowAll] = useState(false);
  return (
    <StyledComs>
        <div className="popular-subreddits">
            <h2>TOP COMMUNITIES</h2>
            <Citems>
                <div className="com-items">
                    <div className="com-members com-members1">
                        <img src={comreddit} alt="comreddit"/>
                        <div className="comdat">
                            <h4>r/AskReddit</h4>
                            <span>43.543.211 members</span>
                        </div>
                    </div>
                    <div className="com-members com-members2">
                        <img src={comreddit} alt="comreddit"/>
                        <div className="comdat">
                            <h4>r/LeagueofLegends</h4>
                            <span>3.423.431 members</span>
                        </div>
                    </div>
                    <div className="com-members com-members3">
                        <img src={comreddit} alt="comreddit"/>
                        <div className="comdat">
                            <h4>r/OutofTheLoop</h4>
                            <span>4.621.211 members</span>
                        </div>
                    </div>
                    <div className="com-members com-members4">
                        <img src={comreddit} alt="comreddit"/>
                        <div className="comdat">
                            <h4>r/discordapp</h4>
                            <span>1.113.431 members</span>
                        </div>
                    </div>
                    <div className="com-members com-members5">
                        <img src={comreddit} alt="comreddit"/>
                        <div className="comdat">
                            <h4>r/Twitch</h4>
                            <span>2.223.233 members</span>
                        </div>
                    </div>
                    { showAll && (
                     <>
                        <div className="com-members com-members6">
                            <img src={comreddit} alt="comreddit"/>
                            <div className="comdat">
                                <h4>r/gtaonline</h4>
                                <span>4.543.211 members</span>
                            </div>
                        </div>
                        <div className="com-members com-members7">
                            <img src={comreddit} alt="comreddit"/>
                            <div className="comdat">
                                <h4>r/OnePiece</h4>
                                <span>7.743.271 members</span>
                            </div>
                        </div>
                        <div className="com-members com-members8">
                            <img src={comreddit} alt="comreddit"/>
                            <div className="comdat">
                                <h4>r/GlobalOfenssive</h4>
                                <span>9.593.291 members</span>
                            </div>
                        </div>
                        <div className="com-members com-members9">
                            <img src={comreddit} alt="comreddit"/>
                            <div className="comdat">
                                <h4>r/Cooking</h4>
                                <span>6.543.211 members</span>
                            </div>
                        </div>
                        <div className="com-members com-members10">
                            <img src={comreddit} alt="comreddit"/>
                            <div className="comdat">
                                <h4>r/Breakingbad</h4>
                                <span>43.543.211 members</span>
                            </div>
                        </div>
                        </>
                        )}
                </div>
            </Citems>
            <button onClick={() => setShowAll(!showAll)} >
                { showAll ? 'Show Less' : 'Show More' }
            </button>
        </div>
        </StyledComs>
  );
}

export default TopComuns;


const StyledComs = styled(motion.div) `

.popular-subreddits {
    display: none;
}

    @media screen and (min-width: 1024px) {
        
    .popular-subreddits {
        position: fixed;
        display: flex;
        flex-direction: column;
        background: #fafafa;
        width: 16%;
        border-radius: 1rem;
        padding: 1rem 1rem;
        right: 0;
        margin-right: 12rem;
        overflow-y: auto;
        h2 {
            font-weight: 900;
            text-align: left;
            font-size: 1rem;
            color: #5c5b5b;
            letter-spacing: 0px;
        }
    }
    button {
        border: none;
        background: transparent;
        width: 7rem;
        padding: 0.5rem 0rem;
        border-radius: 5rem;
        font-weight: bold;
        color: #2c2c2c;
        &:hover {
            cursor: pointer;
            background: #cacaca;
        }
    }

}

`

const Citems = styled(motion.div)`

        .com-items {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
        }


        .com-members {
        display: flex;
        align-items: self-start;
        margin-right: auto;
        padding-right: 6rem;
        margin: 0;
        padding: 0;  
        width: 100%; // or set a specific fixed width like '250px' 
        &:hover{
            cursor: pointer;
            background: #e0e0e0;
        }
    }


        .comdat {
            h4 {
                font-weight: lighter;
                margin-bottom: 0rem;
            }
            span {
                font-size: 0.8rem;
                color: #808080;
            }
        }

        img {
            margin-top: 0.3rem;
            padding: 1rem 1rem;
            width: 30px;
            height: 30px;
        }
`;

