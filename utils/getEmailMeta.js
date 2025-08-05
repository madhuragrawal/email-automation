import readline from "readline";

let REPLY_TO_EMAIL = "";
let SENDER_NAME = "";

export const getEmailMeta = async () => {
    if (REPLY_TO_EMAIL && SENDER_NAME) return { REPLY_TO_EMAIL, SENDER_NAME };

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

    REPLY_TO_EMAIL = await question("📧 Enter your reply-to email address: ");
    SENDER_NAME = await question("👤 Enter the sender name: ");

    rl.close();

    return { REPLY_TO_EMAIL, SENDER_NAME };
};