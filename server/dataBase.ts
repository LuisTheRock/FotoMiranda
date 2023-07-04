import {Sequelize} from "sequelize";

export const db = new Sequelize(
    "photo_miranda_db",
    "root",
    "#DingDong!2001!##",
    {
        host: "localhost",
        dialect: "mysql"
    }
)
