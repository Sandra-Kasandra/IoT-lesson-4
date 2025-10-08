const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fetch = require('node-fetch'); 

const app = express();
const server = http.createServer(app);

// Create WebSocket server with CORS enabled
const io = new Server(server, { cors: { origin: "*" } });

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// data storage
let sensorData = []; 

// GET API endpoint to get all stored data
app.get('/api/data', (req, res) => {
    res.json(sensorData);
});

// Serve static files (like client.html)
io.on("connection", socket => {
    console.log("Client connected via WebSocket");
    socket.emit("init-data", sensorData); 
});

// ThingSpeak channel configuration
const CHANNEL_ID = 'CHANNEL_ID';
const READ_API_KEY = 'YOUR-READ-API-KEY';

setInterval(async () => {
  try {
    const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${READ_API_KEY}&results=1`;
    const resp = await fetch(url);
    const data = await resp.json();
    const feed = data.feeds[0];
    const latest = {
      temperature: parseFloat(feed.field1),
      humidity: parseFloat(feed.field2),
      timestamp: feed.created_at
    };
    sensorData.push(latest);
    io.emit("new-data", latest); 
    console.log("Fetched from ThingSpeak:", latest);
  } catch (e) {
    console.log("Fetch error:", e);
  }
}, 20000); 

// start server
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));
