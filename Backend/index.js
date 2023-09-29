const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const MongoDBStore = require("connect-mongo");

mongoose
  .connect("mongodb://127.0.0.1:27017/auth_E-Revive")
  .then(() => {
    console.log("Mongo Connection open");
  })
  .catch((err) => {
    console.log("Mongo Error");
  });

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // <-- location of the react app were connecting to
    credentials: true,
  })
);

const store = new MongoDBStore({
  mongoUrl: "mongodb://127.0.0.1:27017/auth_E-Revive",
  secret: "secret",
  touchAfter: 24 * 3600,
});

store.on("error", function (e) {
  console.log("Store error", e);
});

const sessionConfig = {
  store,
  name: "session",
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  console.log(req.user);
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  } catch (e) {
    console.log("Error", e.message);
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) return next(err);
    res.send("Successfully Logged out");
  });
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
