import express from "express";
import http from "http";
import { Server } from "socket.io";
import { SocketServer } from "./socket";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // ajusta para producción
  },
});

app.use(express.json());

const socketServer = new SocketServer(io);

socketServer.initialize();

const PORT = process.env.PORT ?? 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
