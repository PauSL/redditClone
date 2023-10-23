import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
    return(
        <StyledComment>
            {comment.text}
        </StyledComment>
    )
};

export default Comment;

const StyledComment = styled.div`
    border-bottom: 1px solid #e8ebec;
    padding: 10px;
`;