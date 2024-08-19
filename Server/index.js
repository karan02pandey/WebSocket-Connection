const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log("Server is listening on port", port);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log("Data from client %s:", data);
    ws.send("Thanks buddy!");
  });
});