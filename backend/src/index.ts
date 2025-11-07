import "dotenv/config";
import express from "express";
import syncDB from "./models";

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
    await syncDB();

    app.listen(port, () => {
      console.log(`Server runnig on http//localhost:${port}`);
    });
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};
