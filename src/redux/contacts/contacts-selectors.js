export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const getLoadingStatus = ({ contacts }) => {
  console.log('це статус loading:', contacts.loading);
  return contacts.loading;
};
