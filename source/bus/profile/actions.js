// Types
import { types } from './types';

export const profileActions = {
    // Sync
    fillProfile: (profile) => {
        return {
            type: types.FILL_PROFILE,
            payload: profile,
        }

    },
    updateAvatar: (nameAvatarUrl) => {
        return {
            type: types.UPDATE_AVATAR,
            payload: nameAvatarUrl,
        }

    },
    clearProfile: (profile) => {
        return {
            type: types.CLEAR_PROFILE,
        }

    },

    // Async
    updateNameAsync: (newName) => {
        return {
            type: types.UPDATE_NAME_ASYNC,
            payload: newName
        }
    },
    updateAvatarAsync: (nameAvatar) => {
        return {
            type: types.UPDATE_AVATAR_ASYNC,
            payload: nameAvatar
        }
    },
    updatePasswordAsync: (passwordData) => {
        return {
            type: types.UPDATE_PASSWORD_ASYNC,
            payload: passwordData
        }
    },

};