// Core
import { put, apply, select } from 'redux-saga/effects'

// Instruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.unlike, [postId]);

        if(response.status !== 204) {
            throw new Error(message);
        }

        const liker = yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        });

        yield put(postActions.unlikePost({ postId, liker }));
    } catch (error) {
        yield put(uiActions.emitError(error, '-> unlike post worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}