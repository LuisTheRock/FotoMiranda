export default interface IAlbum {
  id?: number;
  albumName: string;
  role?: string;
  images?: File[];
  createAt?: string;
  updatedAt?: string;
}
