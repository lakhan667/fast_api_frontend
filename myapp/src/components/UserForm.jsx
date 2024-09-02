import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../features/user/userAction'; 
 
function UserForm({ editingUser, setEditingUser }) {
  const [user, setUser] = useState({ id: "", Firstname: "", surname: "", mobile: "" });
  const dispatch = useDispatch();

  //useSelector is used to access loading and error state
  const { loading, error } = useSelector((state) => state.users); 
 
  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ id: "", Firstname: "", surname: "", mobile: "" });
    }
  }, [editingUser]);
 
  const handleChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        //dispatch() is used to dispatch the updatedUser action
        await dispatch(updateUser(user)); 
      } else {
        await dispatch(addUser(user)); 
      }
      setUser({ id: "", Firstname: "", surname: "", mobile: "" });
      setEditingUser(null);
    } catch (err) {
      console.log(err.message);
    }
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input type="number" className="form-control" name="id" value={user.id} onChange={handleChange} disabled={editingUser ? true : false}/>
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" name="Firstname" value={user.Firstname} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input type="text" className="form-control" name="surname" value={user.surname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="number" className="form-control" name="mobile" value={user.mobile} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {editingUser ? "Update User" : "Add User"}
        </button>
        {/* {error && <p className="text-danger mt-2">{error}</p>} */}
      </form>
    </div>
  );
}
 
export default UserForm;