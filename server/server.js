const express = require('express');
const app = express();
const path = require('path');
// const routes = require('./routes');
const cors = require('cors');
const  port  = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
);

app.use('/build', express.static(path.resolve(__dirname, '../build')));

 app.use('/api', (req, res)=>{

    return res.send('hello from the server')
});

// Error Handlers
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  console.log(err)
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app,
};