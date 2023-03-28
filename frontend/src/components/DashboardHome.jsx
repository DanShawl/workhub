import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CiReceipt, CiUser } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <div className=" flex-1 h-screen flex flex-col justify-center items-center md:pl-[100px] gap-y-10">
        <div className="text-center md:mx-52">
          <h1 className=" text-5xl text-[#212121] font-semibold mb-6">
            Welcome to WorkHub
            {/* text-[#ff5c35] */}
          </h1>
          <p className="font-medium text-center text-[#6b6b6b]">
            WorkHub was designed to help you organize and manage various tasks
            and operations related to building maintenance, such as work order
            management, asset tracking, and more. The application can be
            accessed through a desktop or mobile device, allowing you to
            remotely monitor and manage facilities from anywhere, at any time.
          </p>
        </div>
        {/* hover:bg-[#ffb4a16d] */}
        <div className="flex gap-x-16 max-w-3xl">
          <Link
            to={'work-orders'}
            className=" flex flex-1 justify-center items-center flex-col border-[1px] border-gray-300 p-8 rounded-md hover:cursor-pointer bg-[#f2f2f2] hover:bg-[#e7e7e7]  hover:text-[#ff5c35]"
          >
            <h2 className="text-2xl text-[#212121] font-bold">
              Create Work Order
            </h2>
            <p className="text-center font-medium ">
              A work order is a document that specifies the details of a
              maintenance task or repair request.
            </p>
            <CiReceipt className="text-8xl mt-6" />
          </Link>
          <Link
            to={'contacts'}
            className=" flex flex-1 justify-center items-center flex-col border-[1px] border-gray-300 p-8 rounded-md hover:cursor-pointer bg-[#f2f2f2] hover:bg-[#e7e7e7]  hover:text-[#ff5c35]"
          >
            <h2 className="text-2xl text-[#212121] font-bold">
              Create Contact
            </h2>
            <p className="text-center font-medium">
              Create contact profiles for everyone in your workflow and tag work
              orders to track the work they've done with you.
            </p>
            <CiUser className="text-8xl mt-6" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardHome;
