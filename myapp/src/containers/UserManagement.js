import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../features/user/userAction';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, error: usersError } = useSelector((state) => state.users);
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = async (user) => {
    try {
      await dispatch(addUser(user));
      setMessage("User added successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => { setError("") }, 3000);
    }
  };

  const handleUpdateUser = async (user) => {
    try {
      await dispatch(updateUser(user));
      setMessage("User updated successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => { setError("") }, 3000);
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      await dispatch(deleteUser(user.id));
      setMessage("User deleted successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => { setError("") }, 3000);
    }
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}
      <UserForm 
        addUser={handleAddUser} 
        updateUser={handleUpdateUser} 
        editingUser={editingUser} 
        setEditingUser={setEditingUser} 
      />
      <UserList 
        users={users} 
        deleteUser={handleDeleteUser} 
        editUser={(user) => setEditingUser(user)} 
      />
    </div>
  );
};

export default UserManagement;