const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
	_id: ObjectId,
	name: {
		type: String,
		required: true
	},
	dob: {
		type: Date,
		required: true
	},
	phone: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	createAt: {
		type: Date,
		required: true,
		unique: true
	},
	description: {
		type: String
	},
	imageProfile: {
		type: String
	},
	coverImage: {
		type: []
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String
	}
});

module.exports = mongoose.model('Users', userSchema);
