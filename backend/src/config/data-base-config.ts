import { Sequelize } from "sequelize";
import envConfig from "./env-config";

const sequelize = new Sequelize(
  envConfig.DB_NAME,
  envConfig.DB_USER,
  envConfig.DB_PASSWORD,
  {
    host: envConfig.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
