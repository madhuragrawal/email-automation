import dotenv from "dotenv";

dotenv.config();

export const SENDER_NAME = '';
export const REPLY_TO_EMAIL = '';

// Common variables for email templates
// These variables will be used in the templates when no recipient-specific data is provided.
export const emailVariables = {
    senderName: SENDER_NAME,
    resumeLink: 'https://example.com/resume',
    portfolioLink: 'https://example.com/portfolio',
    role: "Software Engineer", // Default role if not specified in recipient-specific data
    companyName: "Company A", // Default company name if not specified in recipient-specific data
};

// Example usage
// The mails array contains:
// - The first element is the email address (or a comma-separated list of email addresses).
// - The second element is an optional placeholders object for recipient-specific data.
// Recipient-specific data takes precedence over common variables in `emailVariables`.
export const mails = [
    ["recipient1@example.com", { role: "Frontend Developer", companyName: "Company B" }],
    ["recipient2@example.com, recipient3@example.com"], // Uses defaults from `emailVariables` if no placeholders provided
];