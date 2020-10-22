const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectTries: 10,
    // reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

console.log(`Connecting to the database ${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB} ...`);

mongoose.connect(url, options).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.error(err);
});
