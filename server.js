const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { createServer } = require("http");
const { Server } = require("socket.io");


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log('a user connected');
});

require('dotenv').config();



app.use(logger("dev"));
app.use(express.json());
app.use(cors());


app.use(cookieParser());
app.use(session({
  secret: 'SocketGame',
  resave: false,
  saveUninitialized: true
}));


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));




// app.get('/', (req, res) => {
//     res.json({data:'hello world from socket'});
//   });


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});








const port = process.env.PORT || 3001;

httpServer.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
