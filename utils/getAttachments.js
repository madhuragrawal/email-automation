import fs from "fs";
import path from "path";

const ATTACHMENTS_DIR = path.resolve("attachments");

export const getAttachments = () => {
    const attachments = [];

    if (!fs.existsSync(ATTACHMENTS_DIR)) {
        return attachments;
    }

    const files = fs.readdirSync(ATTACHMENTS_DIR);

    for (const file of files) {
        const filePath = path.join(ATTACHMENTS_DIR, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
            attachments.push({
                filename: file,
                path: filePath,
            });
        }
    }

    return attachments;
};
