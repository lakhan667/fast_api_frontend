import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
axios.defaults.baseURL = 'http://localhost:8000';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/user');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'An error occurred');
    }
  });
   
  export const addUser = createAsyncThunk('user/addUser', async (user, { rejectWithValue }) => {
    try {
  const response = await axios.post('/api/user/', user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'An error occurred');
    }
  });
   
  export const updateUser = createAsyncThunk('user/updateUser', async (user, { rejectWithValue }) => {
    try {
  const response = await axios.put(`/api/user/${user.id}`, user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'An error occurred');
    }
  });
   
  export const deleteUser = createAsyncThunk('user/deleteUser', async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/user/${userId}`);
      return userId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'An error occurred');
    }
  });