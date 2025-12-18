require('dotenv').config();
console.log("Loaded MONGO_URI =", process.env.MONGO_URI);

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const seedAdmin = require('./seed/adminSeed');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Connect to DB, then seed admin ONLY after the connection is established.
 */
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected. Running admin seeder...");
    seedAdmin();  // <-- THIS NOW RUNS AFTER MONGO CONNECTS
  })
  .catch(err => console.error("Database connection failed:", err));

app.get('/', (req, res) => res.send('Nature Wise API running'));

app.use('/api/tours', require('./routes/tours'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
