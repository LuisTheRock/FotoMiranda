import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import multer from 'multer';

import { db } from './dataBase';
import { AlbumController } from './src/controllers/AlbumController';
import { EmailController } from './src/controllers/EmailController';
import { AlbumService } from './src/services/AlbumService';

dotenv.config();
const app: Express = express();
const upload = multer();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const albumService = new AlbumService();
const albumController = new AlbumController(albumService);

const emailController = new EmailController();

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

app.get(
  '/allAlbums',
  albumController.getAllAlbumsController.bind(albumController)
);

app.post(
  '/registerAlbum',
  upload.array('images'),
  albumController.createAlbumController.bind(albumController)
);

app.post('/login', albumController.login.bind(albumController));

app.get(
  '/albumProfile/:id',
  albumController.getAlbumProfile.bind(albumController)
);

app.delete(
  '/deleteAlbum/:id',
  albumController.deleteAlbumController.bind(albumController)
);

app.post('/sendEmail', emailController.sendEmail.bind(emailController));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
