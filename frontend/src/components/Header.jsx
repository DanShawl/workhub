// import {} from 'react-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useState } from 'react';
import {
  BiMenu,
  BiX,
  // BiTask,
  // BiCalendar,
  // BiBuildings,
  // BiUserCircle,
} from 'react-icons/bi';
function Header() {
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
    <header
      className={
        'bg-[#f8f8f8] w-screen fixed top-0 left-0 md:border-b-2 border-zinc-200 md:flex md:justify-between md:items-center md:w-full z-50 md:px-10 md:space-x-7'
      }

      // className={
      //   !user
      //     ? 'bg-[#f8f8f8] w-screen fixed top-0 left-0 md:border-b-2 border-zinc-200 md:flex md:justify-between md:items-center'
      //     : 'bg-[#f8f8f8] md:h-screen w-screen md:w-60 fixed top-0 left-0 md:border-r-2 border-zinc-200 md:block'
      // }
    >
      <div
        className={`flex items-center h-14 p-3 justify-between ${
          !toggleNav && 'border-b border-zinc-200 md:border-0'
        }`}
      >
        <Link to="/">
          Work<span className=" italic font-bold">Hub</span>
        </Link>
        {toggleNav ? (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiX className="text-2xl" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiMenu className="text-2xl" />
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
          ' md:static z-50 bg-[#f8f8f8] fixed top-14 right-0 w-full px-3 md:pr-0 md:left-0 border-r-2 border-zinc-200 md:h-[100%] md:w-full'
        }
      >
        {user ? (
          <>
            <ul
              className={
                (toggleNav ? 'left-0 flex-1' : '-left-full ') +
                ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3  bg-white px-5 pt-8 font-semibold leading-3 text-[#4a4a4a] duration-500 sm:pt-12 z-50 md:px-0 md:bg-[#f8f8f8] md:static md:flex md:items-center md:space-y-0 md:pt-0 md:space-x-4 md:mr-6 md:justify-end'
              }
            >
              <li>
                <Link
                  to="/login"
                  className="text-[#f16232] flex justify-center items-center gap-1 font-extrabold hover:text-[#de5b34] hover:bg-[#e4e4e4] md:px-2 rounded-sm"
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
        ) : (
          <ul
            className={
              (toggleNav ? 'left-0 flex-1' : '-left-full ') +
              ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3  bg-white px-5 pt-8 font-semibold leading-3 text-[#4a4a4a] duration-500 sm:pt-12  md:static md:w-auto  md:px-0 md:bg-[#f8f8f8] md:flex md:items-center md:space-y-0 md:pt-0 md:space-x-4 md:mr-6'
            }
          >
            <li>
              <Link
                to="/login"
                className="text-[#f16232] flex justify-center items-center gap-1 font-extrabold hover:text-[#de5b34] hover:bg-[#e4e4e4] md:px-2 rounded-sm"
                onClick={() => setToggleNav(!toggleNav)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex justify-center items-center gap-1 font-extrabold bg-[#f16232] rounded-[3px] text-white md:w-fit md:px-4 hover:bg-[#de5b34]"
                onClick={() => setToggleNav(!toggleNav)}
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

/* <ul
              className={
                (toggleNav ? 'left-0 flex-1' : '-left-full ') +
                ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3  bg-[#f8f8f8] px-5 pt-8 font-semibold leading-3 text-[#202124] duration-500 sm:pt-12  md:static md:w-auto md:space-y-2  md:px-0 lg:pt-8 md:bg-[#f8f8f8]'
              }
            >
              <li className="">
                <button className="flex items-center hover:text-[#de5b34] gap-3 w-full md:pl-3 md:border-r-2 border-[#f16232]">
                  <BiTask className="text-2xl" /> Facility Tasks
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3 hidden">
                  <BiBuildings className="text-2xl" /> Work Orders
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3 hidden">
                  <BiCalendar className="text-2xl" /> Schedule
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3 hidden">
                  <BiUserCircle className="text-2xl" /> Contacts
                </button>
              </li>
              <li className="">
                <button
                  className=" bg-zinc-200 rounded mt-6 absolute bottom-4 left-[50%] -translate-x-[50%] w-[90%] md:w-52 md:left-4 md:-translate-x-0 md:bottom-20"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            </ul> */

export default Header;
