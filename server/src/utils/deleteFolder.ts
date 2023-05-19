import fs from "fs";

export function deleteFolder(folderName: string) {

    const path = `src/albums/${folderName}`

    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) {
                // Recursively delete sub-folders
                deleteFolder(curPath);
            } else {
                // Delete files
                fs.unlinkSync(curPath);
            }
        });
        // Delete the folder itself
        fs.rmdirSync(path);
    }
}