import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api";

export const postsSlice = createSlice ({
    name: 'posts',
    initialState: [],
    reducers: {
        setPosts: (state, action) => action.payload
    }
});


export const {setPosts} = postsSlice.actions;

export const fetchTopPosts = (subreddit, searchTerm = '') => async (dispatch) => {
    try {
        const posts = await fetchPosts(subreddit, searchTerm);
        dispatch(setPosts(posts));
    }catch (error) {
        console.error('Error Fetching posts', error);
    }
};

export default postsSlice.reducer;