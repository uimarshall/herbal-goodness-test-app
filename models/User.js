const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		maxlength: 32,
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
