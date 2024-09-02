import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../features/user/userAction';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
 
const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  const handleAddUser = async (user) => {
    try {
      // setMessage("Hello");
      dispatch(addUser(user));
      setTimeout(() => { setMessage("") }, 3000);
      setMessage("User added successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
 
  const handleUpdateUser = async (user) => {
    try {
      dispatch(updateUser(user));
      setMessage("User updated successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
 
  const handleDeleteUser = async (user) => {
    try {
      dispatch(deleteUser(user.id));
      setMessage("User deleted successfully!");
      setTimeout(() => { setMessage("") }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
 
  
  return (
    <div>
      
      {/* { error &&  <div className="alert alert-danger">{error}</div>} */}
      {message && <div className="alert alert-success">{message}</div>}
      <UserForm addUser={handleAddUser} updateUser={handleUpdateUser} editingUser={editingUser} setEditingUser={setEditingUser} />
      <UserList users={users} deleteUser={handleDeleteUser} editUser={(user) => setEditingUser(user)} />
    </div>
  );
};
 
export default UserManagement;