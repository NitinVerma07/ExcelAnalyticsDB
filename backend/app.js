const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // ✅ Import your auth routes

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// ✅ Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Routes
app.use('/api', authRoutes); // All auth endpoints will be prefixed with /api

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
