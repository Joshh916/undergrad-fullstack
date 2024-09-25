const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readLine');

// avoid 'current Server Discovery and Monitoring engine is depricated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', () => {
});

mongoose.connection.on('disconnected', () => {
});

if (process.platform === 'win32') {
}

const gracefulShutdown = (msg, callback) => {
};

// For nodemon restarts
process.once('SIGUSR2', () => {
});

process.on('SIGINT', () => {
});

process.on('SIGTERM', () => {
});

connect();

// bring in the Mongoose schema
require('./models/travlr'); 
require('./models/user');