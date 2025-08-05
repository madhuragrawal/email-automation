import fs from "fs";
import readline from "readline";

// Load templates
const htmlTemplate = fs.readFileSync("templates/email_template.html", "utf-8");
const textTemplate = fs.readFileSync("templates/email_template.txt", "utf-8");
const subjectTemplate = fs.readFileSync("templates/email_subject_template.txt", "utf-8");

// Used to store collected fallback values from user
export let fallbackVariables = {};

/**
 * Extracts unique placeholders from a template string (e.g., {{companyName}})
 */
const extractPlaceholders = (template) => {
    const regex = /{{(.*?)}}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(template)) !== null) {
        matches.add(match[1].trim());
    }
    return Array.from(matches);
};

/**
 * Ask the user for values for any placeholders not provided in data
 */
const askUserForMissingPlaceholders = async (placeholdersNeeded) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

    console.log("Please provide default values below these will be used when a value is not found for a recipient.");

    for (const key of placeholdersNeeded) {
        const answer = await question(`Enter a default value for "${key}": `);
        fallbackVariables[key] = answer;
    }

    rl.close();
};

/**
 * Initializes placeholder fallback values by scanning all templates
 */
export const initializeFallbacks = async () => {
    const htmlPlaceholders = extractPlaceholders(htmlTemplate);
    const textPlaceholders = extractPlaceholders(textTemplate);
    const subjectPlaceholders = extractPlaceholders(subjectTemplate);

    // Unique placeholders across all templates
    const allPlaceholders = new Set([...htmlPlaceholders, ...textPlaceholders, ...subjectPlaceholders]);

    await askUserForMissingPlaceholders(allPlaceholders);
};

/**
 * Populates a template with final variables (CSV row + fallback)
 */
const populateTemplate = (template, recipientData) => {
    const variables = {
        ...fallbackVariables,    // defaults from user
        ...recipientData,        // CSV data (overrides default)
    };

    return template.replace(/{{(.*?)}}/g, (_, key) => variables[key.trim()] || "");
};

export const createSubject = (recipientData) => {
    return populateTemplate(subjectTemplate, recipientData);
};

export const createBodyHTML = (recipientData) => {
    return populateTemplate(htmlTemplate, recipientData);
};

export const createBodyText = (recipientData) => {
    return populateTemplate(textTemplate, recipientData);
};