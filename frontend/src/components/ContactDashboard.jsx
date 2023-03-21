import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getContacts, reset } from '../features/contacts/contactSlice';
import { VscAdd } from 'react-icons/vsc';
import { BiChevronRight } from 'react-icons/bi';
import ContactListItem from './ContactListItem';

const ContactDashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { contacts, isLoading, isError, message } = useSelector(
    (state) => state.contacts
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    if (user) {
      console.log('getting contacts');
      dispatch(getContacts());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  //  To conditionally render a specific users info, I need to:
  //    1.  get all contacts from db and map - done
  //    2.  get contact id from contact item and use that in a separate component
  //    3.  create a toggle for the info (if toggle = true, change id), if not, toggle = false

  return (
    <>
      <div className=" mt-14 md:mt-0 md:bg-[#fff] md:pl-[100px] h-screen flex flex-col text-sm md:w-full">
        <div className=" mx-6 mt-6 md:mb-6 flex items-center justify-between gap-x-4">
          <div>
            <div className=" hidden md:flex items-center gap-x-1 text-[#938f8f] font-normal text-xs mb-2">
              <span className=" hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                Dashboard
              </span>{' '}
              <BiChevronRight className="" />{' '}
              <span className="   hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                Contacts
              </span>{' '}
              {/* <BiChevronRight className="" /> {currentTaskStatus} */}
            </div>
            <div className="">
              <h1 className="font-semibold text-4xl mb-0 pb-1 text-[#302f2d]">
                Contacts
              </h1>
              <p className="text-[#6b6b6b] font-semibold text-xs">
                {/* {getDate()} */}
              </p>
            </div>
          </div>
          <div className="fixed bottom-6 right-4 lg:static z-40 sm:flex sm:gap-x-4">
            <input
              type="text"
              placeholder="Search for a name, email, phone number..."
              className=" hidden sm:block focus:border-gray-300 py-2 px-2 border-[1px] rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs w-64"
            />
            <button
              className=" hover:bg-[#cf5126] rounded-full md:rounded-sm text-white font-semibold bg-[#ff5c35] flex items-center justify-between gap-x-2 p-5 md:p-4 md:py-2 z-49 md:shadow-sm shadow-2xl shadow-zinc-800"
              // onClick={handleOpen}
            >
              <p className="text-white font-semibold hidden md:block">
                Create Contact
              </p>
              <VscAdd className=" text-xl md:text-base" />
            </button>
          </div>
        </div>
        <div className="flex sm:w-full">
          <section className="sm:flex-1 w-full ">
            <ul className=" w-full sm:grid sm:grid-flow-row">
              <li className="hidden sm:grid sm:grid-cols-5 px-6 py-1 gap-x-6 text-[10px] ">
                <div>NAME</div>
                <div>EMAIL </div>
                <div>PHONE</div>
                <div>COMPANY </div>
                <div>TITLE </div>
              </li>
              {contacts.map((contact) => (
                <ContactListItem contact={contact} />
              ))}
            </ul>
          </section>
          {/* <section className="sm:flex-1">
            <div className="border-b-[1px] border-gray-200">
              <h1>Contact Details</h1>
            </div>
          </section> */}
        </div>
      </div>
      {/* <div className=" mt-14 md:mt-0 bg-[#edeeef] md:ml-[146px] h-screen flex flex-col text-sm md:w-fit">
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
              
              </div>
              <div className="">
                <h1 className="font-semibold text-3xl mb-0 pb-1 text-gray-800">
                  Contact List
                </h1>
                <p className="text-gray-500 font-semibold">
             
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
      </div> */}

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

// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const dispatch = useDispatch();

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   dispatch(createContact({ firstName, lastName }));
//   console.log('hello world');
// };
