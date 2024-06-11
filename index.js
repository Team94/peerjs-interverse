import { PeerServer } from "peer";

var privateKey = fs.readFileSync("sslcert/server.key", "utf8");
var certificate = fs.readFileSync("sslcert/server.crt", "utf8");

PeerServer({
  port: 443,
  path: "/",
  ssl: {
    key: privateKey,
    cert: certificate,
  },
});
console.log("PeerJS 서버 실행중..");
