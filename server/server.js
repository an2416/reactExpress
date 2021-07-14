const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const routesIndex = require('./routes/index');
// const cors = require('cors');

// app.use(cors());
app.use(bodyParser.json());
app.use('/api', routesIndex);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});
