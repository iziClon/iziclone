import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 5100,
    ACCESSTOKEN: process.env.ACCESSTOKEN || 'accessToken',
    REFRESHTOKEN: process.env.REFRESHTOKEN || 'refreshToken',
    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'iziclone0@gmail.com',
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || 'Qwerty123456/',
};
