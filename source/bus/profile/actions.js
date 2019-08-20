// Types
import { types } from './types';

export const profileActions = {
    fillProfile: (profile) => {
        return {
            type: types.FILL_PROFILE,
            payload: profile,
        }

    },
    clearProfile: (profile) => {
        return {
            type: types.CLEAR_PROFILE,
        }

    },

};