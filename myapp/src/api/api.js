// import axios from 'axios';
 
// axios.defaults.baseURL = 'http://localhost:8000';
 
// export const fetchUsers = async () => {
//     try {
//         const response = await axios.get('/api/user');
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };
 
// export const addUser = async (user) => {
//     try {
//         const response = await axios.post('/api/user/', user);
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };
 
// export const updateUser = async (user) => {
//     try {
//         // console.log("sending request for update an user")
//         const response = await axios.put(`/api/user/${user.id}`, user);
//         // console.log("response after updatation")
//         return response.data;
//     } catch (error) {
//         // console.log("error in api")
//         handleApiError(error);
//     }
// };
 
// export const deleteUser = async (user) => {
//     try {
// await axios.delete(`/api/user/${user.id}`);
//     } catch (error) {
//         handleApiError(error);
//     }
// };
 
// const handleApiError = (error) => {
//     if (error.response) {
//         // throw new Error( 'An error occurred');
//         throw new Error(error.response.data.detail || 'An error occurred');
//     } else if (error.request) {
//         throw new Error('No response received from the server');
//     } else {
//         throw new Error('An unexpected error occurred: ' + error.message);
//     }
// };