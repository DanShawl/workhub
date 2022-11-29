import React from 'react';
import { BiPlus } from 'react-icons/bi';

const getDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString('default', { month: 'long' });
  let year = newDate.getFullYear();

  return ` ${month} ${date}, ${year}`;
};

function DashboardHeader({ handleOpen }) {
  return (
    <section className="flex justify-between items-center py-10 md:justify-start md:gap-8 md:items-center md:pt-7 md:pb-8 md:w-full md:border-b-2 md:border-zinc-200 pl-6 pr-6 md:pr-10 md:sticky top-0 bg-white z-50 ">
      {/* <h1>Welcome {user && user.name}</h1> */}
      <div className=" text-left flex-1">
        <h1 className=" text-3xl md:text-4xl mb-0 pb-2">Facility Tasks</h1>
        <p className="text-sm text-zinc-500 ">{getDate()}</p>
      </div>
      <button
        className=" px-3 md:px-0 flex justify-center items-center gap-2 font-bold bg-zinc-100  md:bg-white rounded-[3px] py-2 text-[#4a4a4a] md:w-28 md:mt-0 hover:bg-[#f8f8f8] "
        onClick={handleOpen}
      >
        {/* ff5722 */}
        {/* <BiPlus className="text-1xl" /> */}
        <BiPlus className="text-xl text-[#f16232] md:block " />
        Add Task
      </button>
    </section>
  );
}

export default DashboardHeader;
