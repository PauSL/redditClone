import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./reducers/commentsSlice";
import postSlice from "./reducers/postSlice";


const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentsSlice,
    }
})

export default store;