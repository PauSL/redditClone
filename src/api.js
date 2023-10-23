import axios from "axios";


const BASE_URL = "https://www.reddit.com";

export const fetchPosts = async (subreddit) => {
    try {
        const response = await axios.get (`${BASE_URL}/r/${subreddit}/top.json?limit=20&t=hour`)
        return response.data.data.children.map(post => post.data);
    }catch (error){
        throw error;
    }
};


export const fetchComments = async (subreddit, postId) => {
    try {
        const response = await axios.get (`${BASE_URL}/r/${subreddit}/comments/${postId}.json`)
        return response.data[1].data.children.map(comment => comment.data);
    }catch (error) {
        throw error;
    }
};



export const fetchUserAvatar = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${username}/about.json`);
        return response.data.data.icon_img; // This gets the user's avatar URL
    } catch (error) {
        throw error;
    }
};


