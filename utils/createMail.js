import fs from "fs";
import { emailVariables } from "../setup.js";

const htmlTemplate = fs.readFileSync("templates/email_template.html", "utf-8");
const textTemplate = fs.readFileSync("templates/email_template.txt", "utf-8");
const subjectTemplate = fs.readFileSync("templates/email_subject_template.txt", "utf-8");

const populateTemplate = (template, variables) => {
    return template.replace(/{{(.*?)}}/g, (_, key) => variables[key.trim()] || "");
};

export const createSubject = (placeholdersData) => {
    const variables = {
        ...emailVariables,
        ...placeholdersData,
    };
    return populateTemplate(subjectTemplate, variables);
};

export const createBodyHTML = (placeholdersData) => {
    const variables = {
        ...emailVariables,
        ...placeholdersData,
    };
    return populateTemplate(htmlTemplate, variables);
};

export const createBodyText = (placeholdersData) => {
    const variables = {
        ...emailVariables,
        ...placeholdersData,
    };
    return populateTemplate(textTemplate, variables);
};