// Core
import { all, call } from 'redux-saga/effects'

// Watcher
import { watchPost } from '../bus/posts/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';

export function* rootSaga () {
    yield all([call(watchPost), call(watchAuth)]);
}
