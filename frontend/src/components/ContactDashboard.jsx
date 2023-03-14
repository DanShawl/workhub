import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../features/contacts/contactSlice';

const ContactDashboard = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact({ firstName, lastName }));
    console.log('hello world');
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default ContactDashboard;
