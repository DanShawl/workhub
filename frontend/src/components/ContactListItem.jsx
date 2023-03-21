import React from 'react';
import { CiMail, CiPhone } from 'react-icons/ci';

const ContactListItem = ({ contact }) => {
  return (
    <li
      className="grid grid-cols-2 gap-y-4 sm:gap-y-0 sm:grid-cols-5 w-full px-6 py-4 gap-x-6 border-[1px] border-b-0 border-gray-200 hover:cursor-pointer hover:bg-[#f2f2f2] font-sans"
      onClick={() => console.log(contact._id)}
    >
      <div className="flex items-center gap-x-2 col-span-2 sm:col-span-1">
        <div className=" bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
          {contact.firstName[0]}
          {contact.lastName[0]}
        </div>
        <div>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <div>
            <p className="text-[#6b6b6b] text-[10px]">
              Created on{' '}
              <span className="">
                {new Date(contact.createdAt).toLocaleString('default', {
                  day: 'numeric',
                })}{' '}
              </span>
              <span className="">
                {new Date(contact.createdAt).toLocaleString('default', {
                  month: 'long',
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <CiMail />
        <p>{contact.emailAddress ? contact.emailAddress : '-'}</p>
      </div>

      <div className="flex items-center gap-x-2">
        <CiPhone />
        <p>{contact.phoneNumber ? contact.phoneNumber : '-'}</p>
      </div>
      <div className="flex items-center">
        <p>{contact.company}</p>
      </div>
      <div className="flex items-center">
        <p>{contact.jobTitle}</p>
      </div>
    </li>
  );
};

export default ContactListItem;
