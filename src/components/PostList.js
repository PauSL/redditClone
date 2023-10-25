import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchTopPosts } from "../reducers/postSlice";
import styled from "styled-components";
import Post from "./Post";


const PostList = ({ subreddit = 'all', searchTerm }) => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)

    useEffect(() => {

        dispatch(fetchTopPosts(subreddit, searchTerm));
    },[subreddit, dispatch, searchTerm])

    const filteredPosts = posts.filter (post => {
        return post.title.includes(searchTerm)
    })



    return (
        <StyledPosts>
            {filteredPosts.map(post => <Post key={post.id} post={post} />)}
        </StyledPosts>
    )
};

export default PostList;

const StyledPosts = styled(motion.div)`


`;