# IoT Dashboard Project

This project is using Raspberry Pi Pico W, ThingSpeak, Node.js, and a web dashboard.
## Features

- Reads temperature and humidity from DHT22 sensor
- Sends data to ThingSpeak every 15 seconds
- Node.js server fetches data from ThingSpeak every 20 seconds
- Real-time dashboard using Chart.js and Socket.io
- Keeps lasts 20 measurements in memory
  
## How it works

1. Pico W collects sensor data and posts to ThingSpeak.
2. Node.js server fetches the latest data from ThingSpeak.
3. Web dashboard displays real-time data using WebSockets.
   <img width="675" height="581" alt="Screenshot 2025-10-08 053118" src="https://github.com/user-attachments/assets/49e9e424-442d-42a8-ba49-c747391f2554" />
   <img width="648" height="499" alt="Screenshot 2025-10-08 053128" src="https://github.com/user-attachments/assets/29964f73-a86d-4702-8455-860b329ce4c1" />

## Setup
### ThingSpeak
1. Create a channel in ThingSpeak
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
4. Start a server with the command:
    -> node server.js
5. Open `client.html` in a browser to view the dashboard.
