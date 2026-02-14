# Server-Sent Events (SSE) Demo

A simple demonstration of Server-Sent Events (SSE) using Node.js/Express with a real-time event viewer frontend.

## What is SSE?

Server-Sent Events (SSE) is a server push technology enabling a client to receive automatic updates from a server via an HTTP connection. Unlike WebSockets, SSE is unidirectional (server to client only) and uses standard HTTP, making it simpler to implement for real-time updates.

## Project Structure

```
server-sent-events/
├── index.js        # Express server with SSE endpoint
├── index.html      # Frontend SSE viewer
├── package.json    # Project dependencies
└── README.md       # This file
```

## Features

- Real-time event streaming from server to client
- Clean, responsive UI for viewing events
- Connection status indicator
- Auto-scrolling event log
- Error handling and reconnection support

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd server-sent-events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## How It Works

### Server (`index.js`)

The server exposes two endpoints:

- `GET /` - Serves the HTML frontend
- `GET /stream` - SSE endpoint that streams events to clients

The SSE endpoint sets the `Content-Type: text/event-stream` header and sends messages in the SSE format:
```
data: Your message here\n\n
```

### Client (`index.html`)

The frontend uses the browser's built-in `EventSource` API to:

1. Establish a persistent connection to `/stream`
2. Listen for incoming messages
3. Display events with timestamps in real-time
4. Show connection status (connected/disconnected)

## API Reference

### GET /stream

SSE endpoint that streams events to connected clients.

**Response Headers:**
- `Content-Type: text/event-stream`

**Event Format:**
```
data: <message>\n\n
```

## Resources

1. Crash-Course: https://www.youtube.com/watch?v=4HlNv1qpZFY
2. MDN - Server-Sent Events: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
3. Express.js Documentation: https://expressjs.com/

## License

ISC
