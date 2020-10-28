const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Todo = new schema ({
	todoDescription: {
		type: String
	},
	todoResponsible: {
		type: String
	},
	todoPriority: {
		type: String
	},
	todoCompleted: {
		type: Boolean
	}
});

module.exports = mongoose.model('Todo', Todo);