import express from "express";

const server = express();
const PORT = 3999;
const staticDir = "docs";

server.set("port", PORT);

server.use("/", express.static(staticDir));

server.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Start server on port ${PORT}.`);
});
