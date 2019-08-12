// Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC, CREATE_POSTS } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = ( posts ) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    }
};

export const createPosts = ( posts ) => {
    return {
        type: CREATE_POSTS,
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

    dispatch(createPosts(result.data));
};