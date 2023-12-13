const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secretKey = "74hr287hn90s8h2897hsadfa";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passwordOk = bcrypt.compareSync(password, userDoc.password);

  if (passwordOk) {
    jsonWebToken.sign(
      { username, id: userDoc._id },
      secretKey,
      (error, token) => {
        if (error) throw error;
        res.cookie("token", token).json("ok");
      }
    );
  } else {
    res.status(400).json("invalid password/username");
  }
});

app.listen(4000);

// HJqDuKG577QNB8rh
// mongodb+srv://wojswiet02:HJqDuKG577QNB8rh@cluster0.mexdfsw.mongodb.net/?retryWrites=true&w=majority
