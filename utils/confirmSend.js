import readline from "readline";
import { fallbackVariables } from "./createMail.js";

export const confirmBeforeSend = async ({ recipientCount, senderName, replyTo, attachments }) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (q) => new Promise((res) => rl.question(q, res));

    console.log("\n📨 Ready to send emails with the following settings:\n");

    console.log(`🔁 Number of recipients: ${recipientCount}`);
    console.log(`👤 Sender Name: ${senderName}`);
    console.log(`📧 Reply-To: ${replyTo}`);

    if (attachments.length > 0) {
        console.log(`📎 Attachments:`);
        attachments.forEach((a) => console.log(`   - ${a.filename}`));
    } else {
        console.log(`📎 Attachments: None`);
    }

    if (Object.keys(fallbackVariables).length > 0) {
        console.log(`🔤 Default template variables (fallbacks):`);
        Object.entries(fallbackVariables).forEach(([key, value]) => {
            console.log(`   - ${key}: ${value}`);
        });
    } else {
        console.log(`🔤 Default template variables: None`);
    }

    const answer = await question("\n❓ Do you want to continue? (y/n): ");
    rl.close();

    return answer.trim().toLowerCase() === "y";
};
