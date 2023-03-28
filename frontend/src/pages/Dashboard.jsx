import DashboardSideBar from '../components/DashboardSideBar';
import { Link, Outlet } from 'react-router-dom';
import { CiReceipt, CiUser } from 'react-icons/ci';

function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
      </section>
      <Outlet />
    </>
  );
}

export default Dashboard;
