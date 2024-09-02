import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../features/user/userAction";
 
function UserList({ editUser }) {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
 
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
 
  const handleDelete = (user) => {
dispatch(deleteUser(user.id));
  };
 
  if (loading) {
    return (
      <div className="text-center mt-6">
        <p>Loading...</p>
      </div>
    );
  }
 
  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }
 
  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Firstname}</td>
                <td>{user.surname}</td>
                <td>{user.mobile}</td>
                <td>
                <button
                    className="btn btn-warning m-2"
                    onClick={() => editUser(user)}>
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user)}>
                    Delete
                </button>
                 </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default UserList;