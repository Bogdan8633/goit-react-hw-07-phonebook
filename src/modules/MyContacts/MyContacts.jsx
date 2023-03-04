import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactList/MyContactList';
import MyContactsFilter from './MyContactsFilter/MyContactsFilter';
import { useSelector } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';

import { getLoadingStatus } from 'redux/contacts/contacts-selectors';

const MyContacts = () => {
  const loadingStatus = useSelector(getLoadingStatus);

  return (
    <div>
      <h1>Phonebook</h1>
      <MyContactsForm />
      <h2>Contacts</h2>
      <MyContactsFilter />
      {loadingStatus && <Loader />}
      <MyContactList />
    </div>
  );
};

export default MyContacts;
