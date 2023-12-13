const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();
const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://wojswiet02:HJqDuKG577QNB8rh@cluster0.mexdfsw.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (exception) {
    res.status(400).json(exception + "błędnie wypełniony formularz");
    console.log(exception + "błędnie wypełniony formularz");
  }
});

app.listen(4000);

// HJqDuKG577QNB8rh
// mongodb+srv://wojswiet02:HJqDuKG577QNB8rh@cluster0.mexdfsw.mongodb.net/?retryWrites=true&w=majority
