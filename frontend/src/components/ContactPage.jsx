import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  getContacts,
  reset,
  updateContact,
} from '../features/contacts/contactSlice';
import { BiChevronRight, BiEdit, BiRightArrowAlt } from 'react-icons/bi';
// import { VscAdd, VscArrowCircleRight } from 'react-icons/vsc';
import { SlPaperPlane, SlPencil } from 'react-icons/sl';
import {
  CiEdit,
  CiUser,
  CiMail,
  CiPhone,
  CiShop,
  CiDesktop,
  CiLocationArrow1,
  CiPaperplane,
} from 'react-icons/ci';
import Spinner from './Spinner';

const ContactPage = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  const { contacts, isLoading, isError, message } = useSelector(
    (state) => state.contacts
  );

  //  State passed from contact dashboard containing user data
  const location = useLocation();
  const contact = location.state?.contact;

  const {
    _id,
    firstName,
    lastName,
    emailAddress: currentEmail,
    phoneNumber: currentPhoneNumber,
    company: currentCompany,
    jobTitle: currentJobTitle,
  } = contact;

  //  State for handling input selection
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editCompany, setEditCompany] = useState(false);
  const [editJobTitle, setEditJobTitle] = useState(false);

  //  State for updating contact details
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [emailAddress, setEmailAddress] = useState(currentEmail);
  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);
  const [company, setCompany] = useState(currentCompany);
  const [jobTitle, setJobTitle] = useState(currentJobTitle);

  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);
  const jobTitleRef = useRef(null);

  const emailFocus = () => {
    emailRef.current.focus();
    setToggleSubmitButton('email');
    // setCurrentlyEditing(true);
  };
  const phoneFocus = () => {
    phoneRef.current.focus();
    setToggleSubmitButton('phoneNumber');
  };
  const companyFocus = () => {
    companyRef.current.focus();
    setToggleSubmitButton('company');
  };
  const jobTitleFocus = () => {
    jobTitleRef.current.focus();
    setToggleSubmitButton('jobTitle');
  };

  const onEmailSubmit = () => {
    // location.state?.contact.emailAddress = emailAddress
    dispatch(updateContact({ _id, emailAddress }));
    setToggleSubmitButton('');
  };
  const onPhoneSubmit = () => {
    dispatch(updateContact({ _id, phoneNumber }));
    setToggleSubmitButton('');
  };
  const onCompanySubmit = () => {
    dispatch(updateContact({ _id, company }));
    setToggleSubmitButton('');
  };
  const onJobTitleSubmit = () => {
    dispatch(updateContact({ _id, jobTitle }));
    setToggleSubmitButton('');
  };

  // const handleMouseLeave = (ref, edit) => {
  //   if (document.activeElement !== ref.current) {
  //     setCurrentlyEditing(false);
  //     edit(false);
  //   } else {
  //     edit(false);
  //   }
  // };

  const [toggleSubmitButton, setToggleSubmitButton] = useState(false);

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
          <section
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
              onMouseEnter={() => setEditEmail(true)}
              onMouseLeave={() => setEditEmail(false)}
              // onMouseLeave={() => handleMouseLeave(emailRef, setEditEmail)}
            >
              <div className="flex items-center gap-x-5">
                <CiMail className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Email Address</p>

                  {/* {isLoading && toggleSubmitButton === 'email' ? (
                    <Spinner />
                  ) : ( */}
                  <input
                    type="text"
                    placeholder={currentEmail}
                    value={emailAddress}
                    // disabled={false}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    onClick={emailFocus}
                    className={`text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent`}
                    ref={emailRef}
                  />
                  {/* )} */}
                </div>
              </div>
              {toggleSubmitButton === 'email' && editEmail ? (
                <button
                  type="button"
                  onClick={onEmailSubmit}
                  className=" text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]"
                >
                  <SlPaperPlane />
                </button>
              ) : (
                <button
                  type="button"
                  className={`${editEmail ? 'visible' : 'invisible'}
                 text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                  onClick={emailFocus}
                >
                  <SlPencil />
                </button>
              )}
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onMouseEnter={() => setEditPhone(true)}
              onMouseLeave={() => setEditPhone(false)}
              // onMouseLeave={() => handleMouseLeave(emailRef, setEditEmail)}
            >
              <div className="flex items-center gap-x-5">
                <CiPhone className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Phone Number</p>

                  {/* {isLoading ? (
                    <Spinner />
                  ) : ( */}
                  <input
                    type="text"
                    placeholder={currentPhoneNumber}
                    value={phoneNumber}
                    // disabled={false}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onClick={phoneFocus}
                    className={` text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent`}
                    ref={phoneRef}
                  />
                  {/* )} */}
                </div>
              </div>
              {toggleSubmitButton === 'phoneNumber' && editPhone ? (
                <button
                  type="button"
                  // onClick={() => setToggleSubmitButton('')}
                  onClick={onPhoneSubmit}
                  className=" text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]"
                >
                  <SlPaperPlane />
                </button>
              ) : (
                <button
                  type="button"
                  className={`${editPhone ? 'visible' : 'invisible'}
                 text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                  // onClick={() => setToggleSubmitButton('email')}
                  onClick={phoneFocus}
                >
                  <SlPencil />
                </button>
              )}
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onMouseEnter={() => setEditCompany(true)}
              onMouseLeave={() => setEditCompany(false)}
            >
              <div className="flex items-center gap-x-5">
                <CiShop className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Company</p>

                  {/* {isLoading ? (
                    <Spinner />
                  ) : ( */}
                  <input
                    type="text"
                    placeholder={currentCompany}
                    value={company}
                    // disabled={false}
                    onChange={(e) => setCompany(e.target.value)}
                    onClick={companyFocus}
                    className={` text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent`}
                    ref={companyRef}
                  />
                  {/* )} */}
                </div>
              </div>
              {toggleSubmitButton === 'company' && editCompany ? (
                <button
                  type="button"
                  onClick={onCompanySubmit}
                  className=" text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]"
                >
                  <SlPaperPlane />
                </button>
              ) : (
                <button
                  type="button"
                  className={`${editCompany ? 'visible' : 'invisible'}
                 text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                  // onClick={() => setToggleSubmitButton('email')}
                  onClick={companyFocus}
                >
                  <SlPencil />
                </button>
              )}
            </div>
            <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              onMouseEnter={() => setEditJobTitle(true)}
              onMouseLeave={() => setEditJobTitle(false)}
            >
              <div className="flex items-center gap-x-5">
                <CiDesktop className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Job Title</p>

                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <input
                      type="text"
                      placeholder={currentJobTitle}
                      value={jobTitle}
                      // disabled={false}
                      onChange={(e) => setJobTitle(e.target.value)}
                      onClick={jobTitleFocus}
                      className={` text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent`}
                      ref={jobTitleRef}
                    />
                  )}
                </div>
              </div>
              {toggleSubmitButton === 'jobTitle' && editJobTitle ? (
                <button
                  type="button"
                  onClick={onJobTitleSubmit}
                  className=" text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]"
                >
                  <SlPaperPlane />
                </button>
              ) : (
                <button
                  type="button"
                  className={`${editJobTitle ? 'visible' : 'invisible'}
                 text-base text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                  // onClick={() => setToggleSubmitButton('email')}
                  onClick={jobTitleFocus}
                >
                  <SlPencil />
                </button>
              )}
            </div>
          </section>
          <section className="flex-1">hello world</section>
        </div>
      </div>
    </>
  );
};

{
  /* <div
              className="flex items-center justify-between gap-x-5 my-2 hover:bg-[#f2f2f2] pl-3 pr-4 py-2 rounded-sm"
              // onClick={() => setCurrentlyEditing('email')}
              // onClick={emailFocus}
              onMouseEnter={() => setEditEmail(true)}
              onMouseLeave={() => handleMouseLeave(emailRef, setEditEmail)}
            >
              <div className="flex items-center gap-x-5">
                <CiMail className="text-lg text-[#6b6b6b]" />
                <div>
                  <p className="text-[#6b6b6b] font-semibold">Email Address</p>

                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <input
                      type="text"
                      placeholder={currentEmail}
                      value={emailAddress}
                      // disabled={!currentlyEditing}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className={`text-xs outline-none placeholder:text-[#212121] focus:placeholder:text-gray-400 bg-transparent`}
                      ref={emailRef}
                    />
                  )}
                </div>
              </div>
              <div>
                {editEmail && currentlyEditing ? (
                  <button type="button" onClick={onEmailSubmit}>
                    <SlPaperPlane
                      className={`${
                        editEmail ? 'visible' : 'invisible'
                      } text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                    />
                  </button>
                ) : (
                  <button type="button" onClick={emailFocus}>
                    <BiChevronRight
                      className={`
                      ${editEmail ? 'visible' : 'invisible'} 
                      text-lg text-[#626262] hover:cursor-pointer hover:text-[#ff5c35]`}
                    />
                  </button>
                )}
              </div>
            </div> */
}

export default ContactPage;
