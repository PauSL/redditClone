import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import PostList from "./PostList";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { fetchTopPosts } from "../reducers/postSlice";
import PostBanner from "./postBanner";
import TopComuns from "./TopComuns";

const MainContent = ({subreddit, postId, searchTerm}) => {
    const dispatch = useDispatch();
    useEffect (() =>{
        dispatch(fetchTopPosts('news'))
    }, [dispatch])
    return(
        <>
        <StyledMain>
            <TopComuns />
            <PostBanner />
            <PostList subreddit={subreddit} searchTerm={searchTerm} />
            <CommentList postId={postId} />
        </StyledMain>
        </>
    )
};

export default MainContent;


const StyledMain = styled(motion.div)`

position: absolute;
    width: 100%;
    margin-left: 0px; // To account for the sidebar width + padding
    padding: 6rem 0rem;
    overflow: hidden;

@media screen and (min-width: 1024px) {
    
    position: absolute;
    width: 70%;
    margin-left: 420px; // To account for the sidebar width + padding
    padding: 6rem 3rem;
}
`