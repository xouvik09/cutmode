import express from "express";
import path from "path";

const app = express();

const publicPath = path.join(process.cwd(), "dist", "public");

app.use(express.json());

app.use(express.static(publicPath));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`CUTMODE server running on port ${PORT}`);
});

