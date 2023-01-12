const express = require('express');
const port = 8000;

const feedbackRouter = require('./routers/feedback');

const app = express();

app.use(express.json());
app.use(feedbackRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port)
});