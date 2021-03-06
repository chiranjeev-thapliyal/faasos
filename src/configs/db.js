const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
	return mongoose.connect(`mongodb+srv://faasos:${process.env.DATABASE_PASS}@cluster0.onmc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	});
}

module.exports = connectDB;