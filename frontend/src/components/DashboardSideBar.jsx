import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useState } from 'react';
// import { BiMenu, BiTask, BiX, BiUserCircle } from 'react-icons/bi';
import { CiReceipt, CiUser } from 'react-icons/ci';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
// BiBuildings, BiUserCircle

const DashboardSideBar = () => {
  // const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);

  //  Logs current user with logout dispatch function
  const onLogout = () => {
    setToggleNav(!toggleNav);
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  // bg-zinc-800
  // bg-[#1a2225]
  // [#292632]
  // f2f2f2
  // 1e2126
  return (
    <div className="bg-white md:bg-[#f2f2f2] w-screen md:h-screen md:max-w-fit fixed top-0 left-0 md:flex md:flex-col md:justify-between md:items-center z-50 md:py-5 text-sm md:border-r-[1px] border-b-[1px] border-gray-300">
      {/* ----------- Sidebar: Logo/Menu Icons ----------- */}
      <div className={`flex items-center h-14 py-3 px-5 justify-between`}>
        <Link to="/" className=" text-[#212121] font-medium md:mb-4 text-xl">
          W
          <span className=" italic font-extrabold -ml-2 text-[#ff5c35]">H</span>
        </Link>
        {toggleNav ? (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <VscChromeClose className="text-2xl text-[#212121]" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <VscMenu className="text-2xl text-[#212121]" />
            {/* <BiMenu className=" text-3xl text-white" /> */}
          </button>
        )}
      </div>

      {/* ----------- Sidebar: Categories (Will add Work Orders/Contacts/Asset Management) ----------- */}

      <nav
        className={
          ' md:static z-50 fixed right-0 w-full md:pr-0 md:left-0 md:h-[100%] md:w-full flex-1'
        }
      >
        <>
          <ul
            className={
              (toggleNav ? 'left-0 flex-1' : '-left-full ') +
              ' transition-left fixed bottom-0 top-14 w-full items-center space-y-3 px-5 pt-8 font-semibold leading-3 bg-[#f2f2f2] duration-500 sm:pt-12 z-50 md:px-0 md:static md:flex md:flex-col md:items-start md:space-y-0 md:pt-0  md:justify-between '
            }
          >
            <li
              className={` w-full md:hover:border-[#ff5c35] md:border-r-4 ${
                splitLocation[1] === 'work-orders'
                  ? 'md:border-[#ff5c35]'
                  : 'md:border-transparent'
              }`}
            >
              <Link
                to="work-orders"
                className={`  flex md:flex-col md:justify-center items-center gap-x-2 md:gap-y-2 text-[#6b6b6b] font-normal text-sm md:text-[10px] py-1 md:py-3 px-5  ${
                  splitLocation[1] === 'work-orders'
                    ? 'md:text-[#212121] md:bg-[#e3e3e3]'
                    : 'md:text-gray-500 '
                }`}
              >
                <CiReceipt className="text-xl" />
                Work Orders
              </Link>
            </li>
            <li
              className={` w-full md:hover:border-[#ff5c35] md:border-r-4 ${
                splitLocation[1] === 'contacts'
                  ? 'md:border-[#ff5c35]'
                  : 'md:border-transparent'
              }`}
            >
              <Link
                to="contacts"
                className={`  flex md:flex-col md:justify-center items-center gap-x-2 md:gap-y-2 text-[#6b6b6b] font-normal text-sm md:text-[10px] py-1 md:py-3 px-5  ${
                  splitLocation[1] === 'contacts'
                    ? 'md:text-[#212121] md:bg-[#e3e3e3]'
                    : 'md:text-gray-500'
                }`}
              >
                <CiUser className="text-xl" />
                Contacts
              </Link>
            </li>
            {/* <li className=" w-full md:border-r-4 md:hover:border-[#f16232] md:border-transparent">
              <Link
                to="/"
                className=" flex items-center gap-x-2 text-zinc-800 font-bold md:font-semibold md:text-gray-400 py-1 md:py-3 pr-10 pl-5 hover:text-gray-100"
              >
                                <BiBuildings />

                Contacts
              </Link>
            </li> */}

            <li className=" w-full px-2 text-center">
              <Link
                to="/login"
                className=" bg-[#e3e3e3] md:bg-transparent mt-6 text-gray-500 flex py-2 pr-10 pl-5 justify-center items-center gap-1 font-normal hover:text-[#de5b34] hover:bg-[#e3e3e3] hover:bg-opacity-50 md:px-3 rounded-sm text-xs md:text-[10px]"
                onClick={onLogout}
              >
                LOGOUT
              </Link>
            </li>
          </ul>
        </>
      </nav>
    </div>
  );
};

export default DashboardSideBar;
