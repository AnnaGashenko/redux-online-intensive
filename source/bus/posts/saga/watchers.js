// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fetchPosts, removePost, likePost, unlikePost } from './workers';

function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFetchPosts() {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

function* watchRemovePosts() {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

function* watchLikePosts() {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

function* watchUnLikePosts() {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}

export function* watchPost() {
    yield all([
        call(watchFetchPosts),
        call(watchCreatePost),
        call(watchRemovePosts),
        call(watchLikePosts),
        call(watchUnLikePosts),
    ])
}