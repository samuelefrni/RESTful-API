require("dotenv").config();
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server running on http://127.0.0.1:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });
