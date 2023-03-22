import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  getContacts,
  reset,
  updateContact,
} from '../features/contacts/contactSlice';
import { BiChevronRight, BiRightArrowAlt } from 'react-icons/bi';
// import { VscAdd } from 'react-icons/vsc';
import {
  CiEdit,
  CiUser,
  CiMail,
  CiPhone,
  CiShop,
  CiDesktop,
  CiLocationArrow1,
} from 'react-icons/ci';

const ContactPage = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  // const { contacts, isLoading, isError, message } = useSelector(
  //   (state) => state.contacts
  // );

  // console.log(contacts);

  //  State passed from contact dashboard containing user data
  const location = useLocation();
  const contact = location.state?.contact;
  const {
    _id,
    firstName,
    lastName,
    emailAddress: currentEmail,
    phoneNumber,
    company,
    jobTitle,
  } = contact;

  // console.log(contact);
  //  State for handling input selection
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editCompany, setEditCompany] = useState(false);
  const [editJob, setEditJob] = useState(false);

  //  State for updating contact details
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [emailAddress, setEmailAddress] = useState(currentEmail);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newCompany, setNewCompany] = useState(company);
  const [newJobTitle, setNewJobTitle] = useState(jobTitle);

  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);
  const jobTitleRef = useRef(null);

  const emailFocus = () => {
    emailRef.current.focus();
    setCurrentlyEditing(true);
  };
  const phoneFocus = () => {
    phoneRef.current.focus();
  };
  const companyFocus = () => {
    companyRef.current.focus();
  };

  const handleMouseLeave = (ref, edit) => {
    if (document.activeElement !== ref.current) {
      setCurrentlyEditing(false);
      edit(false);
    } else {
      edit(false);
    }
  };

  const onEmailSubmit = () => {
    dispatch(updateContact({ _id, emailAddress }));
    setCurrentlyEditing(false);
  };

  return (
    <>
      <div className=" mt-14 md:mt-0 md:bg-[#fff] md:pl-[100px] h-screen flex flex-col text-sm md:w-full">
        <div className=" px-6 py-6 flex items-center justify-between gap-x-4 border-b-[1px] border-gray-300">
          <div>
            <div className=" hidden md:flex items-center gap-x-1 text-[#938f8f] font-normal text-xs mb-2">
              <span className=" hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                Dashboard
              </span>{' '}
              <BiChevronRight className="" />{' '}
              <span className="   hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                Contacts
              </span>{' '}
              <BiChevronRight className="" />{' '}
              <span className="   hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                {firstName} {lastName}
              </span>{' '}
              {/* <BiChevronRight className="" /> {currentTaskStatus} */}
            </div>
            <div className="">
              <h1 className="font-semibold text-4xl mb-0 pb-1 text-[#302f2d]">
                {firstName} {lastName}
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
              <CiEdit className=" text-xl md:text-base" />
              <p className="text-white font-semibold hidden md:block">
                Edit Contact
              </p>
            </button>
          </div>
        </div>
        <div className="flex w-full h-full">
          <form
            className="py-3 px-3 border-r-[1px] border-gray-300 text-xs font-sans"
            // onSubmit={onFormSubmit}
          >
            <h2 className="text-sm">Contact Details</h2>
            <div className="flex items-center gap-x-5 my-4">
              <CiUser className="text-lg text-[#6b6b6b]" />
              <div>
                <p className="text-[#6b6b6b] font-semibold">Name</p>
                <p className="text-[#212121] font-normal">
                  {firstName} {lastName}
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onClick={emailFocus}
              onMouseEnter={() => setEditEmail(true)}
              onMouseLeave={() => handleMouseLeave(emailRef, setEditEmail)}
            >
              <div className="flex items-center gap-x-5">
                <CiMail className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Email Address</p>

                  <input
                    type="text"
                    placeholder={currentEmail}
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent"
                    ref={emailRef}
                  />
                </div>
              </div>
              <div>
                {editEmail && currentlyEditing ? (
                  <button type="button" className="" onClick={onEmailSubmit}>
                    <CiLocationArrow1
                      className={`${
                        editEmail ? 'visible' : 'invisible'
                      } text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                    />
                  </button>
                ) : (
                  <button>
                    <CiEdit
                      className={`${
                        editEmail ? 'visible' : 'invisible'
                      } text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                    />
                  </button>
                )}
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onClick={phoneFocus}
              onMouseEnter={() => setEditPhone(true)}
              onMouseLeave={() => setEditPhone(false)}
            >
              <div className="flex items-center gap-x-5">
                <CiMail className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Phone Number</p>

                  <input
                    type="text"
                    placeholder={phoneNumber}
                    className="text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent"
                    ref={phoneRef}
                  />
                </div>
              </div>
              <div>
                <CiEdit
                  className={`${
                    editPhone ? 'visible' : 'invisible'
                  } text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                />
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onClick={companyFocus}
              onMouseEnter={() => setEditCompany(true)}
              onMouseLeave={() => setEditCompany(false)}
            >
              <div className="flex items-center gap-x-5">
                <CiMail className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Company</p>

                  <input
                    type="text"
                    placeholder={company}
                    className="text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent"
                    ref={companyRef}
                  />
                </div>
              </div>
              <div>
                <CiEdit
                  className={`${
                    editCompany ? 'visible' : 'invisible'
                  } text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-5 my-4">
              <CiPhone className="text-lg text-[#6b6b6b]" />
              <div>
                <p className="text-[#6b6b6b] font-semibold">Phone Number</p>
                <p className="text-[#212121] font-normal">{phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5 my-4">
              <CiShop className="text-lg text-[#6b6b6b]" />
              <div>
                <p className="text-[#6b6b6b] font-semibold">Company</p>
                <p className="text-[#212121] font-normal">{company}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5 my-4">
              <CiDesktop className="text-lg text-[#6b6b6b]" />
              <div>
                <p className="text-[#6b6b6b] font-semibold">Job Title</p>
                <p className="text-[#212121] font-normal">{jobTitle}</p>
              </div>
            </div>
          </form>
          <section className="flex-1">hello world</section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
