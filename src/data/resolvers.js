import { Contacts } from './dbConnectors';
import _ from 'lodash';
export const resolvers = {
	Query: {
		getContacts: async () => {
			return await Contacts.find();
		},
		getContact: async (root, { id }) => {
			var data = await Contacts.findOne({ _id: id });
			return data;
		},
	},
	Mutation: {
		createContact: async (root, { input }) => {
			const newContact = new Contacts(
				_.pick(input, [
					'firstName',
					'lastName',
					'email',
					'company',
					'phone',
				])
			);
			newContact.id = newContact._id;
			await newContact.save();
			return newContact;
		},
		updateContact: async (root, { input }) => {
			const data = await Contacts.findOneAndUpdate(
				{ _id: input.id },
				_.omit(input, ['id']),
				{ new: true }
			);
			return data;
		},
		deleteContact: async (root, { id }) => {
			await Contacts.deleteOne({ _id: id });
			return 'Contact Deleted';
		},
	},
};
