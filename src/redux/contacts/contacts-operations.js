import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunnkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunnkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// export const fetchAddContact = data => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(actions.fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactError(response.data.message));
//     }
//   };

//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchDeleteContactLoading());
//       await api.deleteContact(id);
//       dispatch(actions.fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(actions.fetchDeleteContactError(response.data.message));
//     }
//   };
//   return func;
// };
