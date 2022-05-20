import axios from "axios";
import { Base_API_URL } from "./contants.js";

export const getStory = async (id) => {
    try {
        const story = await axios.get(`${Base_API_URL}/item/${id}.json`);
        return story;
    } catch(error) {
        console.log('Found Error for story');
    }
};

export const getStories = async (type) => {
    try {
        const { data: storyIds }= await axios.get(
            `${Base_API_URL}/${type}stories.json`
            );
            const stories = await Promise.all(storyIds.slice(0, 30).map(getStory))
            return stories;
    } catch(error) {
        console.log('Found Error for stories');
    }
};

// export const getUser = async (id) => {
//     try {
//         const user = await axios.get(`${Base_API_URL}/user/${id}.json`);
//         return user;
//     } catch(error) {
//         console.log('User can not found');
//     }
// };