const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const taskSchema = new Schema({
	_id: ObjectId,
	taskName: {
		type: String,
		required: true
	},
	isDone: {
		type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Tasks', taskSchema);
