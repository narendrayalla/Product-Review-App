// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('../backend/routes/authRoutes');
const productRoutes = require('../backend/routes/productRoutes');
const reviewRoutes = require('../backend/routes/reviewRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Welcome to the Product Review API. Please use the appropriate API endpoints.');
//   });
  

mongoose.connect('mongodb+srv://satyanarendrayalla:lN7dvKjTBD7lXLHx@cluster0.gk3ue.mongodb.net/product-review?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
