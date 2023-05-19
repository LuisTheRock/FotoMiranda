import {Sequelize} from "sequelize";

export const db = new Sequelize(
    "photo_miranda_db",
    "root",
    "#MangaS123##!",
    {
        host: "localhost",
        dialect: "mysql"
    }
)
