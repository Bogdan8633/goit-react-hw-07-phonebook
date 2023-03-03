export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    console.log('getFilteredContacts', contacts.items);
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
