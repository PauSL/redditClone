import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import PostList from "./PostList";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { fetchTopPosts } from "../reducers/postSlice";
import PostBanner from "./postBanner";

const MainContent = ({subreddit, postId}) => {
    const dispatch = useDispatch();
    useEffect (() =>{
        dispatch(fetchTopPosts('news'))
    }, [dispatch])
    return(
        <>
        <StyledMain>
            <PostBanner />
            <PostList subreddit={subreddit} />
            <CommentList postId={postId} />
        </StyledMain>
        </>
    )
};

export default MainContent;


const StyledMain = styled(motion.div)`
    position: absolute;
    margin-left: 420px; // To account for the sidebar width + padding
    padding: 6rem 4rem;

`