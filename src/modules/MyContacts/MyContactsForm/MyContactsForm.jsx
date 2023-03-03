import { useSelector, useDispatch } from 'react-redux';

import React, { useState } from 'react';

import initialState from './initialState';

import styles from './myContactsForm.module.css';

import { getAllContacts } from 'redux/contacts/contacts-selectors';

import { addContact } from 'redux/contacts/contacts-operations';

const MyContactsForm = () => {
  const [state, setState] = useState({ ...initialState });
  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleAddContact = ({ name, number }) => {
    const normalaizedName = name.toLowerCase();

    if (
      allContacts.find(
        contact => contact.name.toLowerCase() === normalaizedName
      )
    ) {
      alert(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact({ name, number }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};
export default MyContactsForm;
