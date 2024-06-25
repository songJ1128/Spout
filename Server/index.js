const express = require("express");

const app = express();
const port = 8080;
const querystring = require("querystring");
let token = "token";
const axios = require("axios");
const cors = require("cors");
const { METHODS } = require("http");
const authRoutes = require("./routes/auth");
const thisauthRoutes = require("./routes/thisauth");
const songQuery = require("./routes/songQuery");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET, POST",
};

app.use(cors(corsOptions));

app.use("/auth", authRoutes);
app.use("/thisauth", thisauthRoutes);
app.use("/songQuery", songQuery);

app.listen(port, () => {
  console.log(port);
});
