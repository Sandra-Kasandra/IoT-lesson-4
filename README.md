# IoT Dashboard Project

This project is using Raspberry Pi Pico W, ThingSpeak, Node.js, and a web dashboard.
## Features

- Reads temperature and humidity from DHT22 sensor
- Sends data to ThingSpeak every 15 seconds
- Node.js server fetches data from ThingSpeak every 20 seconds
- Real-time dashboard using Chart.js and Socket.io
- Keeps last 20 measurements in memory
  
## How it works

1. Pico W collects sensor data and posts to ThingSpeak.
2. Node.js server fetches the latest data from ThingSpeak.
3. Web dashboard displays real-time data using WebSockets.

## Setup
### ThingSpeak
1. Create channel in ThingSpeak
2. Add two fields
3. Save API Keys and channel ID
4. Go to Apps -> ThingsHTTP -> create one
5. Put into "URL"-field this link:
    -> https://api.thingspeak.com/channels/{YOUR-ID-CHANNEL}/feeds.json?api_key={YOUR-READ-API-KEY}&results=1

### Wokwi
1. Open the project:    
    -> https://wokwi.com/projects/444191870185614337
2. Put into THINGSPEAK_API_KEY = {YOUR WRITE API KEY}
3. Start simulation
   
### Server
1. Clone repo
2. Install Node.js dependencies: 
    -> npm install express socket.io node-fetch
3. Open the server.js file, find those strokes and write id channel and api read key:
    -> const CHANNEL_ID = 'YOUR-ID-CHANNEL';
    -> const READ_API_KEY = 'YOUR-READ-API-KEY';
4. Start server with command:
    -> node server.js

5. 3. Open `client.html` in a browser to view the dashboard.
