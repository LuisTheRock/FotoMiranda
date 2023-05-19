export interface IRegisterAlbum {
    albumName: string;
    albumPassword: string;
    role: string,
    images: Express.Multer.File[];
}