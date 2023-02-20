# Server monitoring app

### simple app displaying current disk and CPU usage 

## Introduction

This application shows 2 graphs. One shows current CPU usage of the backend server and the other shows disk usage by the server.
The frontend of the app is created in React and uses vite as its build tool. To present the data about the server chart.js
and react-chartjs-2 are used.
The backend of the is an express.js server running in node.js Javascript runtime.

## Setup

**You need node.js 16.17+ to run this app**

The setup has two steps, because of the architecure used to create this application (Client-Server).

First you need to setup backend server. Do that by opening *server* located in *server-monitoring* (base directory)
directory in CLI and install dependencies.

**npm install**

then compile typescript code with **tsc** command and finally run express server by typing **node dist/index.js**

Then open *server-monitoring* directory and install dependencies again with **npm install**.

Type **npm run dev** to start frontend server. Navigate to **http:/localhost:5173** to inspect the application
