// liteAPI.js

let ws;
let reconnectInterval = null;
const WS_URL = 'ws://localhost:5991/ws/lite';

function connectWebSocket() {
  ws = new WebSocket(WS_URL);

  ws.addEventListener('open', () => {
    console.log('WebSocket connection opened.');
    if (reconnectInterval) {
      clearInterval(reconnectInterval);
      reconnectInterval = null;
    }
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket connection closed.');
    if (!reconnectInterval) {
      reconnectInterval = setInterval(() => {
        console.log('Reconnecting...');
        connectWebSocket();
      }, 5000); // Attempt to reconnect every 5 seconds
    }
  });

  ws.addEventListener('message', (event) => {
    console.log('Received:', event.data);
  });
}

function sendCmd(command) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(command);
  } else {
    console.log('WebSocket is not open. Can\'t send command.');
  }
}

function closeConnection() {
  if (ws) {
    ws.close();
  }
}

// Automatically initialize WebSocket connection upon import
connectWebSocket();

module.exports = { sendCmd, closeConnection };
