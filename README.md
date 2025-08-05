# 🌟 Email Automation Tool  

## Overview

This project is an open-source **Node.js** application designed to automate email sending tasks with ease and flexibility. Whether you're applying for jobs, sending newsletters, or managing outreach campaigns, this project empowers you to send personalized, professional emails at scale.  

## ✨ Features  

- **SMTP Integration**: Works with any SMTP service provider (e.g., Gmail, Hostinger, Outlook, Yahoo).
- **Customizable Templates**: Define your own HTML, plain-text, and subject templates using placeholders like `{{role}}`, `{{companyName}}`.
- **Dynamic Placeholder Injection**: Automatically fills email templates with recipient-specific or fallback data.
- **CSV-Based Recipient Input**: Add multiple recipients easily using a `.csv` file with custom placeholder columns.
- **Attachments Support**: Just drop files into the `attachments/` folder and they’ll be included in all emails automatically.
- **Confirmation Before Send**: Summary of email meta (attachments, placeholders, reply-to, sender name) shown before sending.
- **Progress Tracking**: Real-time CLI progress bar to track sending progress.
- **Smart Logging**: Auto-saves detailed logs of accepted, rejected, and failed emails into timestamped files in the `logs/` folder.

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

Create a `.env` file in the project’s root directory:

```env
# SMTP Configuration
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
```


---

## 📤 Usage

### 1. Prepare Your Email Templates

Edit these files under `/templates/`:

- `email_template.html` – full HTML email body
- `email_template.txt` – plain-text version
- `email_subject_template.txt` – subject line template

Use placeholders like `{{companyName}}`, `{{role}}`, etc., which will be replaced dynamically.

### 2. Prepare Recipient CSV

Create a `recipients.csv` file like this:

```csv
email,role,companyName
john@example.com,Frontend Developer,TechCorp
jane@example.com,Backend Developer,DataWorks
```

> ✅ You can include any placeholder fields that are used in your templates.

### 3. Add Attachments (Optional)

Drop any files you want to send with every email into the `/attachments/` folder. These will be auto-included. (Subfolders are ignored.)

### 4. Run the Application

```bash
node index.js
```

or


```bash
npm run send
```

You’ll see a confirmation summary (sender name, reply-to, attachments, placeholders, recipient count).  
Type `y` to begin sending.

---

## 📂 Output and Logs

- Sending progress is shown in the terminal.
- A full report is saved to `/logs/log-<timestamp>.txt`, including accepted, rejected, and failed emails.

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
