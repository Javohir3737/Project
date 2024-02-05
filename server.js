const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to database
connectDB();



const travelRoutes = require('./routes/tavelRoutes.js');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/travel', travelRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
