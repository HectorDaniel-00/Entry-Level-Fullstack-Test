import sequelize from "../config/data-base-config";
import { User } from "./user.models";

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with the database");
    await sequelize.sync({
      force: false,
    });
    console.log(" Tables synchronized correctly.");
  } catch (error) {
    console.error(" Error synchronizing database:", error);
  }
};

export default syncDB;
