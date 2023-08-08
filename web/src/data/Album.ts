import IAlbum from '../interfaces/IAlbum';

export default class Album implements IAlbum {
  id?: number;
  albumName: string;
  albumPassword: string;
  role?: string;
  images?: File[];

  constructor(
    albumName: string,
    albumPassword: string,
    role?: string,
    images?: File[]
  ) {
    this.albumName = albumName;
    this.albumPassword = albumPassword;
    this.role = role;
    this.images = images;
  }
}
