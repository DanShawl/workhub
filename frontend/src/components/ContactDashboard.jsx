import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getContacts, reset } from '../features/contacts/contactSlice';
// import { VscAdd } from 'react-icons/vsc';
import { BiChevronRight, BiPlus } from 'react-icons/bi';
import ContactListItem from './ContactListItem';
import Spinner from './Spinner';
import FormModal from './FormModal';

const ContactDashboard = () => {
  //  Functions for getting user/contact data
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { contacts, isLoading, isError, message } = useSelector(
    (state) => state.contacts
  );

  //  State for contacts/modal
  const [currentContact, setCurrentContact] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  //  Functions for handling modal information
  const handleOpen = (contactID) => {
    setCurrentContact(contacts.filter((contact) => contact._id === contactID));
    setToggleModal(true);
  };
  const handleClose = () => {
    setCurrentContact(null);
    setToggleModal(false);
  };

  //  Checking for user/errors
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    if (user) {
      dispatch(getContacts());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className=" mt-14 md:mt-0 md:bg-[#fff] md:pl-[100px] h-screen flex flex-col text-sm md:w-full">
        {/* ----------- Contact Dashboard Header/Sidebar: contains header/search ----------- */}
        <div className=" border-b-2 border-gray-200 sm:border-b-0 px-6 py-6 flex items-center justify-between gap-x-4">
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
            {/* <input
              type="text"
              placeholder="Search for a name, email, phone number..."
              className=" hidden lg:block focus:border-gray-300 py-2 px-2 border-[1px] rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs w-64"
            /> */}
            <button
              className=" hover:bg-[#cf5126] rounded-full lg:rounded-sm text-white font-semibold bg-[#ff5c35] flex items-center justify-between gap-x-2 p-5 lg:p-4 lg:py-2 z-49 sm:shadow-sm shadow-2xl shadow-zinc-800"
              onClick={handleOpen}
            >
              <BiPlus className=" text-xl lg:text-base" />
              <p className="text-white font-semibold hidden lg:block">
                Create Contact
              </p>
            </button>
          </div>
        </div>

        {/* ----------- Contact Dashboard Contact Grid: List of contacts ----------- */}

        <div className="flex sm:w-full">
          <section className="sm:flex-1 w-full ">
            <ul className=" w-full sm:grid sm:grid-flow-row">
              <li className="hidden sm:grid sm:grid-cols-3 px-6 py-1 gap-x-6 text-[10px] ">
                <div>NAME</div>
                <div>EMAIL </div>
                <div>PHONE</div>
                <div className="hidden lg:block">COMPANY </div>
                <div className="hidden lg:block">TITLE </div>
              </li>

              {contacts.map((contact) => (
                <ContactListItem
                  contact={contact}
                  key={contact._id}
                  handleOpen={handleOpen}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
      <FormModal
        setCurrentItem={setCurrentContact}
        toggleModal={toggleModal}
        handleClose={handleClose}
        currentItem={currentContact}
        modalType={'contact'}
      />
      <Outlet />
    </>
  );
};

export default ContactDashboard;
