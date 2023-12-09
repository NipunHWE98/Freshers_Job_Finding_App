import mongoose from 'mongoose';

// connecting to database
const connectDB = async () => {
    const connectionUrl = "mongodb+srv://nipunhw98:okXiJXB0nf1EyfRI@cluster0.bg4o362.mongodb.net/okXiJXB0nf1EyfRI";
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectDB;