export function convertImageToJpg(image: File): Promise<Blob> {
  return new Promise<Blob>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx!.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to convert image to JPEG'));
            }
          },
          'image/jpeg',
          0.8
        );
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(image);
  });
}
