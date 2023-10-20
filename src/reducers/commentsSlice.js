import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../api";

export const commentsSlice = createSlice ({
    name: 'comments',
    initialState: [],
    reducers: {
        setComments: (state, action) => action.payload,
    },
});

export const {setComments} = commentsSlice.actions;

export const fetchTopComments = (subreddit) => async (dispatch) => {
    try{
        const comments = await fetchComments(subreddit);
        dispatch(setComments(comments));
    }catch (error) {
        console.error('Errir fetching comments', error);
    }
};

export default commentsSlice.reducer;