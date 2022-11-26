// import {} from 'react-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useState } from 'react';
import {
  BiMenu,
  BiX,
  BiTask,
  BiCalendar,
  BiBuildings,
  BiUserCircle,
} from 'react-icons/bi';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [toggleNav, setToggleNav] = useState(false);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="bg-white md:h-screen w-screen md:w-60 fixed top-0 left-0 md:border-r-2 border-zinc-200 md:block">
      <div
        className={`flex items-center h-14 p-3 justify-between ${
          !toggleNav && 'border-b border-zinc-200 md:border-0'
        }`}
      >
        <Link to="/">WorkHub</Link>
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
      <nav className=" bg-white fixed top-14 right-0 w-full px-3 md:w-60 md:left-0 border-r-2 border-zinc-200 md:h-[100%]">
        {user ? (
          <>
            <ul
              className={
                (toggleNav ? 'left-0 flex-1' : '-left-full ') +
                ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3  bg-white px-5 pt-8 font-semibold leading-3 text-[#4a4a4a] duration-500 sm:pt-12  md:static md:w-auto md:space-y-2  md:px-0 lg:pt-8 md:bg-white'
              }
            >
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3">
                  <BiTask className="text-2xl" /> Facility Tasks
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3">
                  <BiBuildings className="text-2xl" /> Work Orders
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3">
                  <BiCalendar className="text-2xl" /> Schedule
                </button>
              </li>
              <li className="">
                <button className="flex items-center gap-3 hover:bg-zinc-100 w-full rounded-sm md:px-3">
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
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
