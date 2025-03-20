// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const orderRoutes = require('./Routes/orderRoutes');
const userRoutes = require('./Routes/userRoutes');
const menuRoutes = require('./Routes/menuRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api', menuRoutes);

// Database Connection
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
