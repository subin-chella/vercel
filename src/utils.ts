import fs from 'fs';
import path from 'path';

export function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let length =5;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}




export function getAllFilesInFolder(folderPath: string): string[] {
    const files: string[] = [];

    // Read directory contents
    const contents = fs.readdirSync(folderPath);

    // Iterate through each file/directory in the folder
    contents.forEach((item) => {
        const fullPath = path.join(folderPath, item);

        // Check if it's a file or a directory
        if (fs.statSync(fullPath).isFile()) {
            files.push(fullPath); // Add file path to the list
        } else {
            // Recursively call getAllFilesInFolder for subdirectories
            const subFolderFiles = getAllFilesInFolder(fullPath);
            files.push(...subFolderFiles); // Concatenate subdirectory files to the list
        }
    });

    return files;
}


