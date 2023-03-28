import DashboardSideBar from '../components/DashboardSideBar';
import { Link, Outlet } from 'react-router-dom';
import { CiReceipt, CiUser } from 'react-icons/ci';

function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        {/* <div className=" flex-1 h-screen flex flex-col justify-center items-center md:pl-[100px] gap-y-10">
          <div className="text-center md:mx-52">
            <h1 className=" text-5xl text-[#212121] font-semibold mb-6">
              Welcome to WorkHub
            
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              modi aliquid qui, ad facilis perspiciatis praesentium cum vero
              recusandae explicabo saepe sit rerum in voluptatibus eveniet quae
              enim aspernatur delectus! A, natus reiciendis! Rerum, obcaecati
              libero molestias ipsum atque unde illo corrupti recusandae
              dignissimos facilis! Dicta quis velit facere distinctio!
            </p>
          </div>
          
          <div className="flex gap-x-16 max-w-3xl">
            <Link className=" flex justify-center items-center flex-col border-[1px] border-gray-300 p-8 rounded-md hover:cursor-pointer bg-[#f2f2f2] hover:bg-[#e7e7e7]  hover:text-[#ff5c35]">
              <h2 className="text-2xl text-[#212121]">Create Work Order</h2>
              <p className="text-center">
                A work order is a document that specifies the details of a
                maintenance task or repair request.
              </p>
              <CiReceipt className="text-8xl mt-6" />
            </Link>
            <Link className=" flex justify-center items-center flex-col border-[1px] border-gray-300 p-8 rounded-md hover:cursor-pointer hover:bg-[#efefef] hover:text-[#ff5c35]">
              <h2 className="text-2xl">Create Work Order</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, impedit!
              </p>
              <CiReceipt className="text-8xl mt-6" />
            </Link>
          </div>
        </div> */}
      </section>
      <Outlet />
    </>
  );
}

export default Dashboard;
