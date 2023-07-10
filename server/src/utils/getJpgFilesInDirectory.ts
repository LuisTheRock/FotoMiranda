import fs from 'fs';
import path from 'path';

import IImage from '../interfaces/IImage';

function getImagesFromFolderDirectory(folderName: string): Promise<IImage[]> {
  const imagesDirectory = `src/assets/albums/${folderName}`;

  return new Promise((resolve, reject) => {
    fs.readdir(imagesDirectory, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const images: IImage[] = [];

      files.forEach((filename) => {
        const filePath = path.join(imagesDirectory, filename);
        const data = fs.readFileSync(filePath).toString('base64');
        images.push({ filename, data });
      });

      resolve(images);
    });
  });
}

export default getImagesFromFolderDirectory;
