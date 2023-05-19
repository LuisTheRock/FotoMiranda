import { Request, Response } from 'express';

import { IRegisterAlbum } from '../interfaces/IRegisterAlbum';
import { AlbumService } from '../services/AlbumService';

// function getBase64Image(path: string): string {
//   const data = fs.readFileSync(path);
//   return Buffer.from(data).toString('base64');
// }

export class AlbumController {
  private albumService: AlbumService;

  constructor(albumService: AlbumService) {
    this.albumService = albumService;
  }

  async getAlbumProfile(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
      const albumProfile = await this.albumService.getAlbumProfile(id);

      res.status(200).send(albumProfile);
    } catch (error: unknown) {
      res.status(400).send({ error: (error as Error).message });
    }
  }

  async deleteAlbumController(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    try {
      const result = await this.albumService.deleteAlbum(id);
      if (result > 0) {
        res.status(204).end();
      }
    } catch (error: unknown) {
      res.status(404).send({ error: (error as Error).message });
    }
  }

  async getAllAlbumsController(req: Request, res: Response) {
    try {
      const albumsDetails = await this.albumService.getAllAlbums();
      res.status(200).send(albumsDetails);
    } catch (error: unknown) {
      res.status(400).send({ error: (error as Error).message });
    }
  }

  async createAlbumController(req: Request, res: Response) {
    const { albumName, albumPassword, role } = req.body;
    const images = req.files as Array<Express.Multer.File>;

    const album: IRegisterAlbum = { albumName, albumPassword, role, images };

    const result = await this.albumService.createAlbum(album);

    if (result.message) {
      res.status(201).send({ message: result.message });
    } else if (result.error) {
      res.status(422).send({ error: result.error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { albumName, albumPassword } = req.body;
      const info = await this.albumService.handleLogin(
        albumName,
        albumPassword
      );
      res.status(200).send(info);
    } catch (error) {
      res.status(400).send({ error: (error as Error).message });
    }
  }
}
