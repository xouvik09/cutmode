import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, "..", "dist", "public");

app.use(express.json());

app.use(express.static(publicDir));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`CUTMODE server listening on http://localhost:${port}`);
});

