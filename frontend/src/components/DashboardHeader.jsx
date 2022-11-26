import React from 'react';

const getDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString('default', { month: 'long' });
  let year = newDate.getFullYear();

  return ` ${month} ${date}, ${year}`;
};

function DashboardHeader({ handleOpen }) {
  return (
    <section className="flex flex-col justify-center items-center py-10 md:flex-row md:justify-between md:items-center md:pt-7 md:pb-8 md:w-full md:border-b-2 md:border-zinc-200 pl-6 pr-6 md:pr-10 md:sticky top-0 bg-white z-50">
      {/* <h1>Welcome {user && user.name}</h1> */}
      <div className=" text-center md:text-left">
        <h1 className=" text-4xl mb-0 pb-2">Facility Tasks</h1>
        <p className="text-sm text-zinc-500 ">{getDate()}</p>
      </div>
      <button
        className=" mt-6 flex justify-center items-center gap-1 font-extrabold bg-[#6870fa] rounded-[3px] w-full py-3 text-white md:w-28 md:mt-0 hover:bg-[#5058e5]"
        onClick={handleOpen}
      >
        {/* <BiPlus className="text-1xl" /> */}
        Add New
      </button>
    </section>
  );
}

export default DashboardHeader;
