import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost:27017/cms', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB....'))
	.catch((error) => console.error('Connection Failed....'));

const ContactSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	company: {
		type: String,
	},
	phone: {
		type: Number,
	},
});

const Contacts = mongoose.model('contact', ContactSchema, 'contact');

export { Contacts };
