const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const {exec} = require('child_process');

const userRoutes = require('./routes/UserRoutes.js');
const productRoutes = require('./routes/ProductRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');

dotenv.config();

const setupSwagger = require('./config/swagger'); 


const app = express();
app.use(cors());
app.use(express.json()); 
setupSwagger(app);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  exec(`start http://localhost:${PORT}/api-docs`);
});