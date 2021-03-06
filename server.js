// importing
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// api routes
app.get('/', (req, res) => {
	res.status(200).send('Popular Pokemon API');
});

app.get('/popular', async (req, res) => {
	const json = fs.readFileSync('./popular.json');
    popularPkm = JSON.parse(json);
	res.status(200).send(popularPkm);
});

// listener
app.listen(port, () => console.log(`Listening on http://localhost:${port} (click to open)`));
