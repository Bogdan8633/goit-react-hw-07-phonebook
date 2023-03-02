import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactList/MyContactList';
import MyContactsFilter from './MyContactsFilter/MyContactsFilter';

const MyContacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <MyContactsForm />
      <h2>Contacts</h2>
      <MyContactsFilter />
      <MyContactList />
    </div>
  );
};

export default MyContacts;
