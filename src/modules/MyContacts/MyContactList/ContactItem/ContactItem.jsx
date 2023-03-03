import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

import styles from './contactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.number}>{phone}</p>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
