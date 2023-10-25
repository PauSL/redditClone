import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import avdown from '../assets/img/avdown.svg';
import avup from '../assets/img/avup.svg';
import comments from '../assets/img/comments.svg';
import share from '../assets/img/share.svg';
import dots from '../assets/img/dots.svg';
import comreddit from '../assets/img/comreddit.svg';
import flag from '../assets/img/flag.svg';

const Post = ({ post }) => {
    const isImageLink = post.url && (post.url.endsWith(".jpg") || post.url.endsWith(".png"));
    const isLinkPost = post.post_hint === "link";
    const [isActive, setIsActive] = useState(null);
    const [votes, setVotes] = useState(Math.floor(Math.random()* ( 10000 - 10 + 1 ) + 10 ));
    const handleUpVotes = () => {
        setVotes(votes + 1)
    }
    const handleDownVotes = () => {
        setVotes(votes - 1)
    }

    return (
        <>
        <StyledPost id={post.id} >
            <div className="post-metadata">
                <img src={comreddit} alt="User Avatar" className="user-avatar" />
                <div className="user-info">
                <span>{post.subreddit_name_prefixed}</span>
                </div>
                <span>{new Date(post.created_utc * 1000).toLocaleString([], {hour: '2-digit', minute: '2-digit'})}</span>
                <div className="btndot">            
                    <button className="btn1">Join</button>
                    <div  onClick={()=> setIsActive(!isActive) } className="port-drop">
                        <img className="dots" src={dots} alt="dots" />
                        {isActive && (
                        <div className="flag">
                            <img src={flag} alt="report"/>
                            <span>Report</span>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
            {isImageLink && <img src={post.url} alt={post.title} />}
            {isLinkPost && <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>}
            </div>
                <div className="post-metadata2">
                    <div className="votes">
                        <img className="aup" src={avup} alt="avup" onClick={handleUpVotes} />
                        <span>{votes}</span>
                        <img className="adown" src={avdown} alt="avdown" onClick={handleDownVotes} />
                    </div>
                    <div className="comments">
                        <img src={comments} alt="cmd" />
                        <span>{post.num_comments}</span>
                    </div>
                    <div className="share">
                        <img src={share} alt="share" />
                    </div>
                </div>
        </StyledPost>
        </>  
    )
};

export default Post;

const StyledPost = styled(motion.div)`
    position: relative;
    width: 90%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e8ebec;
    padding: 1rem 1rem;
    overflow-x: hidden;
    h2{
        font-size: 1rem;
        clear: both;
    }
    p {
        color: #6e6e6e;
        font-size: 1rem;
    }

    .post-metadata {
        display: flex;
        position: relative;
        width: 100%;
        align-items: center;
        font-size: 0.8rem;
        color: grey;
        span {
            margin-right: 1rem;
        }
        .btndot {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-bottom: 0rem;
        }

        .user-info {
            margin-right: 0rem;
        }

        .btn1 {
        width: 5rem;
        height: 2rem;
        border: none;
        background: #0045ac;
        color: white;
        border-radius: 5rem;
        margin-left: auto;
        margin-right: 0.5rem;
        }
        .btn1:hover {
            background: #003584;
        }
        .user-avatar {
        margin-top: -2px;
        width: 25px; // Or your desired size
        height: 25px;
        border-radius: 50%;
        margin-right: 5px; // Some margin for separation
        }
        .dots{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.5rem 0.5rem;
            margin-bottom: 0.5rem;
            &:hover{
                background: #e0e0e0;
                border-radius: 50%;
            }
        }
        img {
            width: 1rem;
            height: 1rem;
        }
    }

    img {
        width: 90%;
        object-fit: cover;
        border-radius: 20px;
        margin-top: 1rem;
    }


    .post-metadata2 {
        display: flex;
        margin-top: 1rem;
        align-items: center;
    }

    .votes {
        background: #efeff0;
        display: flex;
        align-items: center;
        margin-right: 1rem;
        border-radius: 4rem;
        img {
            display: flex;
            align-items: center;
            margin-top: 0px;
            padding: 0.6rem 0.6rem;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
        }
        .aup:hover {
            background: #e0e0e0;
            border-radius: 50%;
        }
        .adown:hover {
            background: #e0e0e0;
            border-radius: 50%;  
        }
    }

    .comments {
        background: #efeff0;
        display: flex;
        align-items: center;
        border-radius: 4rem;
        padding: 0.6rem 0.9rem;
        margin-right: 1rem;
        &:hover{
            background: #e0e0e0;
        }
        img {
            margin-top: 0px;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
            margin-left: 1rem;
        }
    }

    .share {
        background: #efeff0;
        display: flex;
        align-items: center;
        border-radius: 4rem;
        padding: 0.7rem 2rem;
        &:hover{
            background: #e0e0e0;
        }
        img {
            margin-top: -4px;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
            margin-left: 1rem;
        }
    }

    .port-drop {
        img{
            width: 1rem;
            height: 1rem;
        }
    }
    .flag {
        position: absolute;
        display: flex;
        align-items: center;
        right: 1rem;
        width: 6rem;
        padding: 1rem 1.5rem;
        margin-top: 5px;
        background: white;
        box-shadow: 1px 1px 10px #6e6e6e;
        z-index: 20;
        span {
            font-size: 1rem;
            color: black;
            margin-left: 1rem;
            margin-top: 0;
            align-self: center;
        }
        img {
            margin-top: 0;
            align-self: center;
        }
    }
    

    
    @media screen and (min-width: 1024px) {
        
    width: 50%;
    margin-top: auto;
    margin-left: 4rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e8ebec;
    padding: 2rem 2rem;
    :hover{
        cursor: pointer;
    }
    &:hover {
    background-color: #f7f7f7; // Or any other hover effect you desire
    border-radius: 2rem;
    }
    h2{
        font-size: 1.2rem;
        clear: both;
    }
    p {
        color: #6e6e6e;
        font-size: 1rem;
    }

    .post-metadata {
        display: flex;
        position: relative;
        align-items: center;
        font-size: 0.8rem;
        color: grey;
        span {
            margin-right: 10px;
        }
        .btndot {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-bottom: 0rem;
        }
        .btn1 {
        width: 5rem;
        height: 2rem;
        border: none;
        background: #0045ac;
        color: white;
        border-radius: 5rem;
        margin-left: auto;
        margin-right: 2rem;
        }
        .btn1:hover {
            background: #003584;
        }
        .user-avatar {
        margin-top: -2px;
        width: 25px; // Or your desired size
        height: 25px;
        border-radius: 50%;
        margin-right: 5px; // Some margin for separation
        }
        .dots{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.5rem 0.5rem;
            margin-bottom: 0.5rem;
            &:hover{
                background: #e0e0e0;
                border-radius: 50%;
            }
        }
        img {
            width: 1rem;
            height: 1rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        margin-top: 10px;
    }


    .post-metadata2 {
        display: flex;
        margin-top: 1rem;
        align-items: center;
    }

    .votes {
        background: #efeff0;
        display: flex;
        align-items: center;
        margin-right: 2rem;
        border-radius: 4rem;
        img {
            display: flex;
            align-items: center;
            margin-top: -4px;
            padding: 1rem 0.8rem;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
        }
        .aup:hover {
            background: #e0e0e0;
            border-radius: 50%;
        }
        .adown:hover {
            background: #e0e0e0;
            border-radius: 50%;  
        }
    }

    .comments {
        background: #efeff0;
        display: flex;
        align-items: center;
        border-radius: 4rem;
        padding: 0.7rem 2rem;
        margin-right: 2rem;
        &:hover{
            background: #e0e0e0;
        }
        img {
            margin-top: -4px;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
            margin-left: 1rem;
        }
    }

    .share {
        background: #efeff0;
        display: flex;
        align-items: center;
        border-radius: 4rem;
        padding: 0.7rem 2rem;
        &:hover{
            background: #e0e0e0;
        }
        img {
            margin-top: -4px;
            width: 1rem;
            height: 1rem;
        }
        span {
            font-size: 0.9rem;
            font-weight: lighter;
            margin-left: 1rem;
        }
    }

    .port-drop {
        img{
            width: 1rem;
            height: 1rem;
        }
    }
    .flag {
        position: absolute;
        display: flex;
        align-items: center;
        right: 1rem;
        width: 6rem;
        padding: 1rem 1.5rem;
        margin-top: 5px;
        background: white;
        box-shadow: 1px 1px 10px #6e6e6e;
        z-index: 20;
        span {
            font-size: 1rem;
            color: black;
            margin-left: 1rem;
            margin-top: 0;
            align-self: center;
        }
        img {
            margin-top: 0;
            align-self: center;
        }
    }
    }
`;
