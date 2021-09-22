const path = require('path');
const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const songs = require("./routes/api/songs");
const follows = require("./routes/api/follows");
const likes = require("./routes/api/likes");
const peerreviews = require("./routes/api/peer_reviews");
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
} else {
  app.get("/", (req, res) => res.send("Hi World"));
}

app.use("/api/users", users);
app.use("/api/songs", songs);
app.use("/api/follows", follows);
app.use("/api/likes", likes);
app.use("/api/peer_reviews", peerreviews);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));  

