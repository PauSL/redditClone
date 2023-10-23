import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchUserAvatar } from "../api";

const Post = ({ post }) => {
    const isImageLink = post.url && (post.url.endsWith(".jpg") || post.url.endsWith(".png"));
    const isLinkPost = post.post_hint === "link";
    const [userAvatar, setUserAvatar] = useState(null);

    useEffect (() => {
        const fetchAvatar = async () => {
            try{
                const avatarUrl = await fetchUserAvatar(post.subreddit_name_prefixed.slice[3])
                setUserAvatar(avatarUrl);
            } catch (error) {

            }
        };
            
        fetchAvatar();

    },[post.subreddit_name_prefixed]);

    return (
        <>
        <StyledPost id={post.id} >
            <div className="post-metadata">
                {userAvatar && <img src={userAvatar} alt="User Avatar" className="user-avatar" />}
                <span>{post.subreddit_name_prefixed}</span>
                <span>{new Date(post.created_utc * 1000).toLocaleString()}</span>
                {post.thumbnail && post.thumbnail !== "self" && post.thumbnail !== "default" &&
                <button className="btn1">Join</button>
                }
            </div>
            <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
            {isImageLink && <img src={post.url} alt={post.title} />}
            {isLinkPost && <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>}
            </div>
            <div className="post-metadata2">
                <span>{post.num_comments} comments</span>
                <span>{post.ups} upvotes</span>
            </div>
        </StyledPost>
        </>  
    )
};

export default Post;

const StyledPost = styled(motion.div)`
    
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
    background-color: #f2f2f2; // Or any other hover effect you desire
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
    .bline {
        content: '';
        height: 4px;
        width: 90%;
        background: #e8ebec;
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
        .btn1 {
        width: 5rem;
        height: 2rem;
        border: none;
        background: #0045ac;
        color: white;
        border-radius: 5rem;
        margin-left: auto;
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
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        margin-top: 10px;
    }
`;
