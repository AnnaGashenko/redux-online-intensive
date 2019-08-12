// Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC, UPDATE_POSTS } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = ( posts ) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    }
};

export const updatePosts = ( posts ) => {
    return {
        type: UPDATE_POSTS,
        payload: posts,
    }
};

export const fetchPostsAsync = () => async ( dispatch ) => {
    dispatch ({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = ( comment ) => async ( dispatch ) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const responce = await api.create.fetch( comment );
    const result = await responce.json();

    dispatch(updatePosts(result.data));
};