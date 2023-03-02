import * as api from '../../shared/services/contacts';

import * as actions from './contacts-actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading()); //Запит про всі наявні контакти пішов
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccess(data)); //Запит успішно повернув дані
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message)); // Запит не зміг повернути дані, тобто відповідь прийшла з помилкою
    }
  };
  return func;
};

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };

  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
