import express from "express";

const app = express();

app.get("/", (req, res) => {
  const { ip, hostname, protocol } = req;
  console.log("update");
  console.log("Update3");
  console.log("update2");
  res.send(`hostname:${hostname} protocol:${protocol}  ip:${ip}`);
});

export default app;
