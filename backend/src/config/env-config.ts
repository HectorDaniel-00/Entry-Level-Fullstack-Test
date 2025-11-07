const envConfig = {
  APP_PORT: process.env.BACKEND_PORT as string,

  DB_NAME: process.env.POSTGRES_DB as string,
  DB_USER: process.env.POSTGRES_USER as string,
  DB_PASSWORD: process.env.POSTGRES_PASSWORD as string,
  DB_HOST: process.env.POSTGRES_HOST as string,
};

export default envConfig;
