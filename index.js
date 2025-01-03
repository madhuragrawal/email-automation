import { createBodyHTML, createBodyText, createSubject } from "./utils/createMail.js";
import { transporter } from "./utils/nodemailerSetup.js";
import { mails, REPLY_TO_EMAIL, SENDER_NAME } from "./setup.js";
import { SingleBar } from 'cli-progress';
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const sendMails = async (mails) => {
    try {
        const totalMails = mails.length;

        let acceptedCount = 0;
        let rejectedCount = 0;
        let sentCount = 0;

        const acceptedEmails = [];
        const rejectedEmails = [];

        const bar = new SingleBar({
            format: 'Sending |{bar}| {percentage}% | {value}/{total} Emails',
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
        });

        bar.start(totalMails, 0);

        for await (const [email, placeholders] of mails) {
            try {
                const info = await transporter.sendMail({
                    from: `${SENDER_NAME} <${process.env.SMTP_USER}>`,
                    to: email,
                    subject: createSubject(placeholders),
                    text: createBodyText(placeholders),
                    replyTo: REPLY_TO_EMAIL,
                    html: createBodyHTML(placeholders),
                });

                acceptedEmails.push(...info.accepted);
                rejectedEmails.push(...info.rejected);

                acceptedCount += info.accepted.length;
                rejectedCount += info.rejected.length;
                sentCount++;

                bar.update(sentCount);
            } catch (mailError) {
                console.error(`Error sending email to ${email}:`, mailError);
                rejectedEmails.push(email);
                rejectedCount++;
            }
        }

        bar.stop();

        console.log("Total Accepted:", acceptedCount);
        console.log("Total Rejected:", rejectedCount);

        // Log results to log.txt
        const logData = [
            `Total Accepted: ${acceptedCount}`,
            `Total Rejected: ${rejectedCount}`,
            '',
            'Accepted Emails:',
            ...acceptedEmails,
            '',
            'Rejected Emails:',
            ...rejectedEmails,
        ].join('\n');

        fs.writeFileSync('log.txt', logData, 'utf8');
    } catch (err) {
        console.error("ERROR:", err);
    }

};

sendMails(mails);