const mongoose = require('mongoose');
const uri = "mongodb+srv://nipunhw98:okXiJXB0nf1EyfRI@cluster0.bg4o362.mongodb.net/okXiJXB0nf1EyfRI";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Connection error', err));
