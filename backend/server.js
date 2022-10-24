const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const colors = require('colors');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//  Body data middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
