const mongoose = require("mongoose");
const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`MongoDb Database Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(error);
		// If something goes wrong, exit with failure
		process.exit(1);
	}
};

module.exports = connectDb;
