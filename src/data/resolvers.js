import { Contacts } from './dbConnectors';
import _ from 'lodash';
export const resolvers = {
	Query: {
		getContacts: () => {
			return Contacts.find();
		},
		getContact: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Contacts.findById(id, (err, contact) => {
					if (err) reject(err);
					else resolve(contact);
				});
			});
		},
	},
	Mutation: {
		createContact: (root, { input }) => {
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
			return new Promise((resolve, reject) => {
				newContact.save((err) => {
					if (err) reject(err);
					else resolve(newContact);
				});
			});
		},
	},
};
