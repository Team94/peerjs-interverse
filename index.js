//Peer server
var privateKey = fs.readFileSync("sslcert/server.key", "utf8");
var certificate = fs.readFileSync("sslcert/server.crt", "utf8");

const { PeerServer } = require("peer");
PeerServer({
  port: 443,
  path: "/",
  ssl: {
    key: privateKey,
    cert: certificate,
  },
});
