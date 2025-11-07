import "dotenv/config";
import express from "express";
import { sequelize } from "./models/user.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API!" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/users");
app.use("/auth");

const start = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {}
};
