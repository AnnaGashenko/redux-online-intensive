// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const users = [
    {
        avatar: "https://lab.lectrum.io/redux/api/image/4luucyyhwlwd/f1Idia4mIe.jpeg",
        firstName: "Dima",
        id: "5d56838a949e6060e781d82d",
        lastName: "Golubenko",
    },
    {
        avatar: "https://lab.lectrum.io/redux/api/image/4luucyyhwlwd/placeholder.jpg",
        firstName: "John",
        id: "5d569247949e6017ac81d82e",
        lastName: "Doe",
    }
];

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const newName = {
    firstName: 'Walter',
    lastName: 'White',
};

const newAvatar = ['avatar'];
const newPassword = {
    oldPassword: 12345,
    NewPassword: 123456,
};

global.__ = {
    userProfile,
    users,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccess204,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    newName,
    newAvatar,
    newPassword,

};
global.fetch = fetch;
global.localStorage = new LocalStorage();
