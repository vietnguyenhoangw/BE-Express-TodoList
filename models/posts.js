const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const taskSchema = new Schema({
	_id: ObjectId,
	title: {
		type: String,
		required: true
	},
	content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: Object,
        default: []
    },
    authorId: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('Posts', taskSchema);
