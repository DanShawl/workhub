import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../features/contacts/contactSlice';
import { BiChevronRight, BiListPlus } from 'react-icons/bi';

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
    <>
      <div className=" mt-14 md:mt-0 bg-[#edeeef] md:ml-[146px] h-screen flex flex-col text-sm md:w-fit">
        <section className="">
          <div className=" mx-6 mt-6 flex items-center justify-between gap-x-4">
            <div>
              <div className="flex items-center gap-x-2 text-gray-500 font-medium mb-2">
                <span className=" text-[#fa8b66] hover:underline hover:underline-offset-4 cursor-pointer decoration-[#ff7445]">
                  Dashboard
                </span>{' '}
                <BiChevronRight className="text-[#fa8b66]" />{' '}
                <span className=" text-[#fa8b66] hover:underline hover:underline-offset-4 cursor-pointer decoration-[#ff7445]">
                  Contact List
                </span>{' '}
                <BiChevronRight className="text-[#fa8b66]" />{' '}
                {/* {currentTaskStatus} */} Hello
              </div>
              <div className="">
                <h1 className="font-semibold text-3xl mb-0 pb-1 text-gray-800">
                  Contact List
                </h1>
                <p className="text-gray-500 font-semibold">
                  {/* {getDate()} */}A date
                </p>
              </div>
            </div>
            <div className="fixed bottom-6 right-4 lg:static z-40">
              <button
                className=" hover:bg-[#cf5126] rounded-full md:rounded-md text-white font-semibold bg-[#ff7445] flex items-center justify-between gap-x-2 p-5 md:p-4 md:py-2 z-49 md:shadow-sm shadow-2xl shadow-zinc-800"
                // onClick={handleOpen}
              >
                <p className="text-white font-semibold hidden md:block">
                  Create Work Order
                </p>
                <BiListPlus className=" text-lg" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="flex justify-center items-center w-full h-full">
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
    </div> */}
    </>
  );
};

export default ContactDashboard;
