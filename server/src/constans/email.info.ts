import { emailEnum } from './email.enum';

export const emailInfo = {
    [emailEnum.WELCOME]: {
        subject: 'Welcome to IziClone',
        templateName: 'Welcome',
    },
    [emailEnum.LOGIN]: {
        subject: 'You successfully login in system',
        templateName: 'Login',
    },
    [emailEnum.FORGOTPASSWORD]: {
        subject: 'Password',
        templateName: 'Forgot Password',
    },
};
