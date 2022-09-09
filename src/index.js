const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', route);


app.listen(PORT , function () {
	console.log(`Express app running on http://localhost:${PORT}`)
});
