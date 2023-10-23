import React, { useEffect } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopComments } from "../reducers/commentsSlice";

const CommentList = ({subreddit, postId}) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);

    useEffect (() => {
        dispatch(fetchTopComments(subreddit, postId));
    },[subreddit, postId, dispatch])


    return(
        <StyledCommentList>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </StyledCommentList>
    )
};

export default CommentList;

const StyledCommentList = styled.div`

`;