import axios from 'axios';

const API_URL = '/api/contacts/';

//  POST request for contact
const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, contactData, config);
  return response.data;
};

//  GET request for contacts
const getContacts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

//  PUT request for todo
const updateContact = async (contact, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + contact._id, contact, config);
  console.log(response.data);
  return response.data;
};

// const deleteTask = async (taskID, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + taskID, config);
//   return response.data;
// };

const contactService = {
  createContact,
  getContacts,
  updateContact,
};

export default contactService;
