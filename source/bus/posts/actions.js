// Types
import { types } from './types';

// Instruments
import { api } from '../../REST';

export const postActions = {
    fillPosts :( posts ) => {
        return {
            type: types.FILL_POSTS,
            payload: posts,
        }
    },

    createPost : ( post ) => {
        return {
            type: types.CREATE_POST,
            payload: post,
        }
    },

    fetchPostsAsync : () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },

    createPostAsync : ( comment ) =>  {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
};