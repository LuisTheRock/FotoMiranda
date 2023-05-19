import {Express} from "express";
import path from "path";
import fs from "fs";
import {convertImagesToJpg} from "./convertImagesToJpg";

export async function createAlbumFolder(albumName: string, images: Array<Express.Multer.File>): Promise<void> {
    const albumPath = `src/albums/${albumName}`;

    // Create the album folder if it doesn't already exist
    if (!fs.existsSync(albumPath)) {
        fs.mkdirSync(albumPath, {recursive: true});
    }

    // Convert and save each image to the album folder
    const jpgImages = await convertImagesToJpg(images);
    jpgImages.forEach((image, index) => {
        const imageFilePath = path.join(albumPath, `index${index}.jpg`);
        fs.writeFileSync(imageFilePath, image);
    });
}