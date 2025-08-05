import fs from 'fs';
import csvParser from 'csv-parser';

/**
 * Loads recipients and their placeholder data from a CSV file.
 * @param {string} filePath Path to the CSV file
 * @returns {Promise<Array<[string, object]>>} Array of [email, placeholders] pairs
 */
export const loadRecipientsFromCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => {
                const email = data.email;
                delete data.email; // Remove email from placeholders
                results.push([email, data]);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};
