const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Using routes from your src/routes folder
app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));