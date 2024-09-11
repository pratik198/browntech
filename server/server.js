const express = require('express');
const mongoose = require('mongoose');
const visitorRoutes = require('./routes/visitorRoutes');

const app = express();
app.use(express.json());

app.use('/api/visitors', visitorRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.log(error));
