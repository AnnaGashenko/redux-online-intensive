// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fetchPosts } from './workers';

function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFetchPosts() {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchPost() {
    yield all([
        call(watchFetchPosts),
        call(watchCreatePost)
    ])
}