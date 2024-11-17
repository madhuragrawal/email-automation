
# 🌟 Email Automation Tool  

## Overview

This project is an open-source **Node.js** application designed to automate email sending tasks with ease and flexibility. Whether you're applying for jobs, sending newsletters, or managing outreach campaigns, this project empowers you to send personalized, professional emails at scale.  

## ✨ Features  

- **SMTP Integration**: Works with any SMTP service provider (e.g., Gmail, Hostinger, Outlook, Yahoo).  
- **Customizable Templates**: Define your own HTML and plain-text email templates using placeholders (e.g., `{{role}}`, `{{companyName}}`).
- **Dynamic Placeholders**: Populate templates dynamically with recipient-specific data.
- **Progress Tracking**: Visual progress bar displays the email-sending process in real time.
- **Batch Email Support**: Effortlessly send emails to multiple recipients with unique personalized content.

---

## 🛠️ Setup  

### 1. Clone the Repository  

```bash
git clone https://github.com/madhuragrawal/email-automation.git
cd email-automation
```

### 2. Install Dependencies  

```bash
npm install
```

### 3. Configure Environment Variables  

Create a `.env` file in the project’s root directory with the following keys:  

```plaintext
# SMTP Configuration
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
```

### 4. Customize Email Templates  

Update the `email_template.html`, `email_subject_template.txt` and `email_template.txt` files to match your use case. Use placeholders such as `{{role}}`, `{{companyName}}`, `{{senderName}}`, etc., for dynamic content.

---

## 📤 Usage  

### 1. Add Recipient Data  

In the `setup.js` file, define the data as follows:  

```javascript
// Common variables for email templates
// These variables will be used in the templates when no recipient-specific data is provided.
export const emailVariables = {
    senderName: SENDER_NAME,
    resumeLink: 'https://your-resume-link.com',
    portfolioLink: 'https://your-portfolio-link.com',
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

```

### 2. Run the Application  

Use the following command to start sending emails:  

```bash
node index.js
```

or


```bash
npm run send
```

### 3. Output:
- Real-time progress bar showing how many emails have been sent.
- Summary of total accepted and rejected emails.

---

## 🛡️ Security  

- **Environment Variables**: Sensitive information like SMTP credentials is stored securely in the `.env` file. Ensure this file is never committed to version control.  
- **Encryption**: Use strong passwords and, if possible, application-specific passwords for email accounts.  

---

## 🤝 Contributing  

We welcome contributions from the community! Follow these steps to contribute:  

1. Fork this repository.  
2. Create a feature branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m 'Add new feature'`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a pull request, and provide details about the changes.  

---

## 📄 License  

This project is licensed under the [MIT License](LICENSE).  

---

## 🛑 Disclaimer  

This project is intended for educational and personal use only. Ensure compliance with email marketing and spam laws before sending unsolicited emails.  

---

## 💬 Questions or Feedback?  

If you have any questions or feedback, feel free to open an issue in this repository.  
