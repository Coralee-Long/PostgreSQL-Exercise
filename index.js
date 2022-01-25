const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, console.log(`Server is listening on port ${port}`));
