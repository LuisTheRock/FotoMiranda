import bcrypt from 'bcrypt';
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

import IAlbumProfile from '../interfaces/IAlbumProfile';
import { ILogin } from '../interfaces/ILogin';
import { IRegisterAlbum } from '../interfaces/IRegisterAlbum';
import { Album } from '../models/Album';
import { createAlbumFolder } from '../utils/createAlbumFolder';
import { deleteFolder } from '../utils/deleteFolder';
import getImagesFromFolderDirectory from '../utils/getJpgFilesInDirectory';

export class AlbumService {
  async getAlbumProfile(id: number): Promise<IAlbumProfile> {
    const album = await Album.findByPk(id);

    if (!album) {
      throw new Error('Album indisponível');
    }
    const albumName = album.dataValues.albumName;

    const images = await getImagesFromFolderDirectory(albumName);

    return {
      albumName: albumName,
      images: images,
    };
  }

  async deleteAlbum(id: number): Promise<number> {
    const album = await Album.findByPk(id);

    if (!album) {
      throw new Error(`Album com id ${id} não foi encontrado`);
    }

    deleteFolder(album.dataValues.albumName);

    return await Album.destroy({ where: { id: id } });
  }

  async getAllAlbums() {
    const albums = await Album.findAll({
      attributes: ['id', 'albumName', 'role', 'createdAt'],
    });

    if (!albums) {
      throw new Error('Nenhum album encontrado');
    }

    return albums.map((album) => ({
      id: album.dataValues.id,
      albumName: album.dataValues.albumName,
      role: album.dataValues.role,
      createdAt: album.dataValues.createdAt,
    }));
  }

  async createAlbum(
    album: IRegisterAlbum
  ): Promise<{ message?: string; error?: string }> {
    try {
      const { albumName, albumPassword, role, images } = album;

      if (role === 'user') {
        await createAlbumFolder(albumName, images);
      }

      const hash = await bcrypt.hash(albumPassword, 10);
      await Album.create({
        albumName: albumName,
        albumPassword: hash,
        role: role,
      });

      return { message: 'Album criado com sucesso' };
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === 'SequelizeUniqueConstraintError'
      ) {
        return { error: 'Nome de album já existente' };
      } else {
        console.log(error);
        return { error: 'Erro comunicação registar album backend' };
      }
    }
  }

  async handleLogin(albumName: string, albumPassword: string): Promise<ILogin> {
    const album = await Album.findOne({ where: { albumName: albumName } });

    if (!album) {
      throw new Error('Album não existente');
    }

    const match = await bcrypt.compare(
      albumPassword,
      album.dataValues.albumPassword
    );

    if (!match) {
      throw new Error('Palavra-passe errada');
    }

    return {
      message: 'Autenticado',
      id: album.dataValues.id,
      role: album.dataValues.role,
    };
  }
}

// To generate a random key and initialization vector
const key = randomBytes(32); // 32 bytes for AES-256
const iv = randomBytes(16); // 16 bytes for AES

// To encrypt an id
function encryptId(id: string): string {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  let encryptId = cipher.update(id, 'utf-8', 'hex') + cipher.final('hex');

  return encryptId;
}

// To decrypt an id
function decryptId(encryptedId: string): string {
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  let decryptedId =
    decipher.update(encryptedId, 'hex', 'utf8') + decipher.final('utf8');

  return decryptedId;
}
