const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/node_dev');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('connect failed!!!');
    }
}

module.exports = { connect };
