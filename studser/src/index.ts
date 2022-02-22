import http from "http";
import app from "./app";

const server = http.createServer(app);
const PORT = process.env.PORT;

process.env.NODE_ENV !== "production" &&
  server.on("listening", () => {
    console.log(`listening on http://localhost:${PORT}`);
  });

server.listen(PORT);
