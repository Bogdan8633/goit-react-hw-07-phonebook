import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import ContactItem from './ContactItem/ContactItem';
import styles from './myContactList.module.css';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const MyContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const isContacts = Boolean(filteredContacts.length);
  console.log('isContacts', isContacts);

  return (
    <div>
      {isContacts && (
        <ul className={styles.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {!isContacts && <p>No contacts in list, yet</p>}
    </div>
  );
};

export default MyContactList;