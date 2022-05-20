const mongoose = require('mongoose');

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.beafm.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

