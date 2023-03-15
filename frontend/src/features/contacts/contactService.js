import axios from 'axios';

const API_URL = '/api/contacts';

const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, contactData, config);
  return response.data;
};

const contactService = {
  createContact,
};

export default contactService;
