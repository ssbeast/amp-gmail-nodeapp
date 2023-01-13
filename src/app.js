const express = require('express');
const bodyParser = require('body-parser')
const port = 8000;

const feedbackRouter = require('./routers/feedback');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(feedbackRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port)
});