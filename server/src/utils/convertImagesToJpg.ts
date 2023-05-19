import {Express} from "express";
import sharp from "sharp";

export async function convertImagesToJpg(images: Express.Multer.File[]): Promise<Buffer[]> {
    const convertedImages: Buffer[] = [];
    let count = 0;

    for (const image of images) {
        const isJpeg = image.mimetype === 'image/jpeg';
        const imageBuffer = isJpeg ? image.buffer : await sharp(image.buffer).jpeg().toBuffer();
        convertedImages.push(imageBuffer);
        count++;
    }

    return Promise.all(convertedImages);
}