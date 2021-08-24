let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://johan:johan123@cluster0.g0kaz.mongodb.net/complemtario5?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;

