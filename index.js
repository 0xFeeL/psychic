const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile('public/index.html', {root : __dirname});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
