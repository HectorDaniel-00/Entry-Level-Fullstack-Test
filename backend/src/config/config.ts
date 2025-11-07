import "dotenv/config";
export default {
  development: {
    username: process,
    password: process.env.POSTGRES_PASSWORD || "mypassword",
    database: process.env.POSTGRES_DB || "mydatabase",
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || 5432,
    dialect: "postgres",
    logging: console.log,
  },
  test: {
    username: process.env.DB_USER || "testuser",
    password: process.env.DB_PASSWORD || "testpassword",
    database: process.env.DB_NAME || "testdatabase",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  },
};
