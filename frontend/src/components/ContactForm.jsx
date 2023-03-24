import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../features/contacts/contactSlice';
import { BiX } from 'react-icons/bi';

const ContactForm = ({ currentItem, setCurrentItem, handleClose }) => {
  // const category = 'Contact';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  // const [active, setActive] = useState(true);

  const dispatch = useDispatch();

  //  Function for creating / updating task items following form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    dispatch(
      createContact({
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        company,
        jobTitle,
      })
    );
    // if (currentItem.length !== 0) dispatch(deleteTask(currentItem[0]._id));
    handleClose();
    setCurrentItem(null);
  };

  //  Function for deleting task items
  // const onDelete = () => {
  //   // dispatch(deleteTask(currentItem[0]._id));
  //   handleClose();
  //   setCurrentItem(null);
  // };
  return (
    <section className=" relative sm:h-full">
      <h2 className="text-sm text-center text-[#212121] md:mb-8">
        Create Contact
      </h2>
      <button
        className=" absolute p-1 rounded-full -top-1 -right-1 text-xl text-[#4a4a4a] hover:bg-gray-100"
        onClick={handleClose}
      >
        <BiX />
      </button>
      <form
        onSubmit={onFormSubmit}
        className=" sm:flex sm:flex-col sm:justify-between sm:h-full sm:max-h-[93%]"
      >
        {/* ----------- Contact Name ----------- */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-4">
            <div>
              <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Steve"
                name="firstName"
                id="firstName"
                className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
              />
            </div>
            <div>
              <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Harvey"
                name="lastName"
                id="lastName"
                className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
              />
            </div>
          </div>
          {/* ----------- Contact Email ----------- */}

          <div>
            <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
              Email
            </label>
            <input
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="steveharvey@gmail.com"
              name="emailAddress"
              id="emailAddress"
              className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
            />
          </div>

          {/* ----------- Contact Phone Number ----------- */}

          <div>
            <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              placeholder="(123) 456-7891"
              name="phoneNumber"
              id="phoneNumber"
              className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
            />
          </div>

          {/* ----------- Contact Phone Number ----------- */}

          <div>
            <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
              Company
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Comedy Central"
              name="company"
              id="company"
              className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
            />
          </div>

          {/* ----------- Contact Phone Number ----------- */}

          <div>
            <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
              Job Title
            </label>
            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              type="text"
              placeholder="Comedian"
              name="jobTitle"
              id="jobTitle"
              className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
            />
          </div>

          {/* ----------- Contact Notes ----------- */}
          <div className="mt-3">
            <label className="text-[#6b6b6b] font-semibold text-xs">
              Contact Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Availability limited to 8-12, Monday-Friday."
              cols="30"
              rows="6"
              className=" mt-1 w-full py-2 px-2 focus:border-gray-300 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] resize-none text-xs"
            ></textarea>
          </div>
        </div>

        {/* ----------- Create/Update / Delete Buttons ----------- */}

        <div className={'flex justify-end mb-4 md:mb-0 pl-1'}>
          <div className="flex justify-end gap-4">
            <button
              className="font-semibold rounded-md py-3 text-[#6b6b6b] hover:bg-zinc-100 text-sm px-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="font-semibold rounded-sm py-3 text-white text-sm px-5 md:px-4 md:py-2 bg-[#ff5c35] hover:bg-[#cf5126] shadow-md flex items-center gap-x-2"
              type="submit"
              // onClick={handleClose}
              // bg-[#ff5722]
            >
              Create Contact
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
