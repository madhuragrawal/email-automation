import fs from "fs";
import path from "path";

const logsDir = path.resolve("logs");
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const logFilePath = path.join(logsDir, `log-${timestamp}.txt`);

const logLines = [];

export const logSuccess = (email, info) => {
    logLines.push(`✅ SUCCESS: ${email}`);
    logLines.push(`    → Accepted: ${info.accepted.join(", ")}`);
    if (info.rejected.length) {
        logLines.push(`    → Rejected: ${info.rejected.join(", ")}`);
    }
    logLines.push("");
};

export const logFailure = (email, error) => {
    logLines.push(`❌ FAILED: ${email}`);
    logLines.push(`    → Reason: ${error.message || error}`);
    logLines.push("");
};

export const saveLogToFile = () => {
    fs.writeFileSync(logFilePath, logLines.join("\n"), "utf-8");
    console.log(`📝 Log saved to ${logFilePath}`);
};
