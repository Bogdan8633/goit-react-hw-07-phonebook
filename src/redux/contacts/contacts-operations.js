import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/contacts';

export const fetchContacts = createAsyncThunk(
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

export const addContact = createAsyncThunk(
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

export const deleteContact = createAsyncThunk(
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
