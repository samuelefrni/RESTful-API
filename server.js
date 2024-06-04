require("dotenv").config();
const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://127.0.0.1:${process.env.PORT}`);
});
