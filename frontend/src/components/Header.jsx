import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

/* ----------- Header: login/register pages ----------- */
function Header() {
  const { user } = useSelector((state) => state.auth);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header
      className={` ${
        user
          ? 'hidden'
          : 'bg-[#f8f8f8] w-screen fixed top-0 left-0 md:border-b-2 border-zinc-200 md:flex justify-between md:items-center md:w-full z-50 md:px-10'
      } `}
    >
      {/* ----------- Header: Logo/Menu Icons ----------- */}

      <div
        className={`flex items-center h-14 p-3 justify-between ${
          !toggleNav && 'border-b border-zinc-200 md:border-0'
        }`}
      >
        <Link to="/" className=" text-gray-800 text-2xl">
          W<span className=" italic font-bold text-[#f16232]">H</span>
        </Link>
        {toggleNav ? (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiX className="text-3xl" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <BiMenu className="text-3xl" />
          </button>
        )}
      </div>

      {/* ----------- Navbar: Links to login/register pages ----------- */}
      <nav
        className={
          ' md:static z-50 bg-[#f8f8f8] fixed top-14 right-0 w-full px-3 md:pr-0 md:h-[100%] md:w-fit md:flex nd:justify-between flex-1'
        }
        // className={
        //   !user
        //     ? 'bg-[#f8f8f8]'
        //     : ' bg-[#f8f8f8] fixed top-14 right-0 w-full px-3 md:pr-0 md:w-60 md:left-0 border-r-2 border-zinc-200 md:h-[100%]'
        // }
      >
        <ul
          className={
            (toggleNav ? 'left-0 flex-1' : '-left-full ') +
            ' transition-left fixed bottom-0 top-14 w-full md:w-fit items-center space-y-3  bg-white px-5 pt-8 font-semibold leading-3 text-[#4a4a4a] duration-500 sm:pt-12 md:static  md:px-0 md:bg-[#f8f8f8] md:flex md:items-center md:space-y-0 md:pt-0 md:space-x-4'
          }
        >
          <li>
            <Link
              to="/login"
              className="text-[#ff7445] flex justify-center items-center gap-1 font-bold hover:text-[#de5b34] hover:bg-[#e4e4e4] md:px-2 rounded-md"
              onClick={() => setToggleNav(!toggleNav)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex justify-center items-center gap-1 font-bold bg-[#ff7445] rounded-md text-white md:w-fit md:px-4 hover:bg-[#de5b34] shadow-sm"
              onClick={() => setToggleNav(!toggleNav)}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
