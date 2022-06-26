import nodemailer, { SentMessageInfo } from 'nodemailer';
import EmailTemplates from 'email-templates';
import path from 'path';

import { emailEnum } from '../constans/email.enum';
import { emailInfo } from '../constans/email.info';
import { config } from '../configs';

class EmailService {
    emailTransporter = nodemailer.createTransport({
        host: 'smtp.ukr.net',
        port: 465,
        secure: true,
        auth: {
            user: config.NO_REPLY_EMAIL,
            pass: config.NO_REPLY_EMAIL_PASSWORD,
        },
    });

    async sendEmail(userEmail:string, action:emailEnum, context = {})
    :Promise<SentMessageInfo> {
        const { subject, templateName } = emailInfo[action];

        const templateRenderer = new EmailTemplates({
            views: {
                // @ts-ignore
                root: path.join(global.rootDir, 'email-templates'),
            },
        });
        const html = await templateRenderer.render(templateName, context);

        return this.emailTransporter.sendMail({
            from: 'iziclone@ukr.net',
            to: userEmail,
            subject,
            html,
        });
    }
}

export const emailService = new EmailService();
