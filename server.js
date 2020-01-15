const express = require("express");
const app = express();
const path = require("path");
const underscore = require("underscore");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root : __dirname});
});

app.get('/api', (req, res) => {
	res.send('loopback test')
});

app.get('/api/navBarOptions', (req, res) => {
	let navBar;
	if (underscore.isEmpty(req.query)) { // default, home page links
		navBar = [{ id: 1, name: 'Meditation', link: 'meditation'},
			{ id: 2, name: 'Excercices', link: 'excercises'},
			{ id: 3, name: 'Literature', link: 'literature'},
			{ id: 4, name: 'Psychology', link: 'psychology'}];
	}
	console.log(navBar);
	res.json(navBar);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
