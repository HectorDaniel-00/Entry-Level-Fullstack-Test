import "dotenv/config";
import express from "express";
import fs from "fs";
import swaggerui from "swagger-ui-express";
import syncDB from "./models";
import RouterPrivate from "./routes/user-routes";
import RouterPublic from "./routes/auth-routes";
import { swaggerSchemasUser } from "./schemas/swaggerSchemas";

const app = express();
const port = process.env.BACKEND_LOCAL || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API!" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/users", RouterPrivate);
app.use("/auth", RouterPublic);

const swaggerDocument = JSON.parse(
  fs.readFileSync("./src/swagger/swagger.json", "utf-8")
);

swaggerDocument.components = swaggerDocument.components || {};
swaggerDocument.components.schemas = {
  ...(swaggerDocument.components.schemas || {}),
  ...swaggerSchemasUser,
};

const start = async () => {
  try {
    await syncDB();

    app.listen(port, () => {
      console.log(`Server runnig on http//localhost:${port}`);
    });
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};
