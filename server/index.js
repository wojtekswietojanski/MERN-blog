const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const Post = require("./models/postModel");
const app = express();
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

const salt = bcrypt.genSaltSync(10);
const secretKey = "74hr287hn90s8h2897hsadfa";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://wojswiet02:HJqDuKG577QNB8rh@cluster0.mexdfsw.mongodb.net/?retryWrites=true&w=majority"
);

// Pobieranie postów
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd przy pobieraniu postów" });
  }
});

// rejestracja
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (exception) {
    res
      .status(400)
      .json(exception + "błędnie wypełniony formularz rejestracji");
    console.log(exception + "błędnie wypełniony formularz rejestracji");
  }
});

// Logowanie
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
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
        }); //ustawianie cookie na  token
      }
    );
  } else {
    res.status(400).json("invalid password/username");
  }
});

// Zapisywanie posta w bazie danych
app.post("/savePost", async (req, res) => {
  const { title, content, imgUrl, username, todayFormatted } = req.body;
  try {
    const userPost = await Post.create({
      title,
      content,
      imgUrl,
      username,
      todayFormatted,
    });
    res.json(userPost);
  } catch (error) {
    res.status(400).json(exception + "błędnie wypełniony formularz posta");
    console.log(exception + "błędnie wypełniony formularz posta");
  }
});

// Sprawdzenie zalogowania
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jsonWebToken.verify(token, secretKey, {}, (error, info) => {
      if (error) {
        throw error;
      }
      res.json(info);
    });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000);

// HJqDuKG577QNB8rh
// mongodb+srv://wojswiet02:HJqDuKG577QNB8rh@cluster0.mexdfsw.mongodb.net/?retryWrites=true&w=majority
