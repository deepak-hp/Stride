const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT

server.listen(3000, ()=> console.log(`server running on http://localhost:${PORT}`))