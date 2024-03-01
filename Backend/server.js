const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./Routers/UserRouter");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database!!!');
  } catch (err) {
    console.error('Error connecting to Database', err);
    throw err;
  }
}

app.get("/", async (req, res) => {
  try {
    await connectDatabase();
    res.status(200).send("Connected to Database!!!");
  } catch (err) {
    res.status(500).send("Error connecting to Database");
  }
});

app.use('/userdata', router);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
