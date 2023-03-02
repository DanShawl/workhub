import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useState } from 'react';
import {
  BiMenu,
  BiTask,
  BiX,
  // BiTask,
  // BiCalendar,
  BiBuildings,
  BiUserCircle,
  // bg-gray-800
} from 'react-icons/bi';
const DashboardSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [toggleNav, setToggleNav] = useState(false);
  const onLogout = () => {
    setToggleNav(!toggleNav);
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <div className="bg-zinc-800 w-screen md:h-screen md:max-w-fit fixed top-0 left-0 md:flex md:flex-col md:justify-between md:items-center z-50 md:py-5">
      <div className={`flex items-center h-14 p-3 justify-between`}>
        <Link to="/" className=" text-white">
          W<span className=" italic font-bold text-[#f16232]">H</span>
        </Link>
        {toggleNav ? (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiX className="text-2xl text-white" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiMenu className="text-2xl text-white" />
          </button>
        )}
      </div>

      <nav
        // className={
        //   !user
        //     ? 'bg-[#f8f8f8]'
        //     : ' bg-[#f8f8f8] fixed top-14 right-0 w-full px-3 md:pr-0 md:w-60 md:left-0 border-r-2 border-zinc-200 md:h-[100%]'
        // }
        className={
          ' md:static z-50 fixed right-0 w-full md:pr-0 md:left-0 md:h-[100%] md:w-full flex-1'
        }
      >
        <>
          <ul
            className={
              (toggleNav ? 'left-0 flex-1' : '-left-full ') +
              ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3 px-5 pt-8 font-semibold leading-3 bg-zinc-100  md:bg-zinc-800 duration-500 sm:pt-12 z-50 md:px-0 md:static md:flex md:flex-col md:items-start md:space-y-0 md:pt-0  md:justify-start '
            }
          >
            <li className=" w-full md:border-r-4 md:hover:border-[#f16232] md:border-transparent">
              <Link
                to="/"
                className=" flex items-center gap-x-2 text-zinc-800 font-bold md:font-semibold md:text-gray-400 py-3 pr-10 pl-5 hover:text-gray-100 "
              >
                <BiTask />
                Facility Tasks
              </Link>
            </li>
            <li className=" w-full md:border-r-4 md:hover:border-[#f16232] md:border-transparent">
              <Link
                to="/"
                className=" flex items-center gap-x-2 text-zinc-800 font-bold md:font-semibold md:text-gray-400 py-3 pr-10 pl-5 hover:text-gray-100"
              >
                <BiBuildings />
                Work Orders
              </Link>
            </li>
            <li className=" w-full md:border-r-4 md:hover:border-[#f16232] md:border-transparent">
              <Link
                to="/"
                className=" flex items-center gap-x-2 text-zinc-800 font-bold md:font-semibold md:text-gray-400 py-3 pr-10 pl-5 hover:text-gray-100"
              >
                <BiUserCircle />
                Contacts
              </Link>
            </li>

            <li className=" w-full px-2 text-center">
              <Link
                to="/login"
                className=" mt-6 text-[#f16232] flex pr-10 pl-5 justify-center items-center gap-1 font-extrabold hover:text-[#de5b34] hover:bg-zinc-700 hover:bg-opacity-50 md:px-3 rounded-sm"
                onClick={onLogout}
              >
                Logout
              </Link>
            </li>
            {/* <li>
                <Link
                  to="/register"
                  className="flex justify-center items-center gap-1 font-extrabold bg-[#f16232] rounded-[3px] text-white md:w-fit md:px-4 hover:bg-[#de5b34]"
                  onClick={() => setToggleNav(!toggleNav)}
                >
                  Register
                </Link>
              </li> */}
          </ul>
        </>
      </nav>
      {/* <Link
        to="/login"
        className=" text-[#f16232] flex justify-center items-center gap-1 font-extrabold hover:text-[#de5b34] hover:bg-[#e4e4e4] md:px-3 rounded-sm"
        onClick={onLogout}
      >
        Logout
      </Link> */}

      {/* <nav>
        <h1>WorkHub</h1>
     
        <ul>
          <li>Facility Tasks</li>
          <li>Work Orders</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <button>Logout</button> */}
    </div>
  );
};

export default DashboardSideBar;
