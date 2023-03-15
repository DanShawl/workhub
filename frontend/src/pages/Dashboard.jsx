import DashboardSideBar from '../components/DashboardSideBar';
import { Outlet } from 'react-router-dom';
function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        {/* <ContactDashboard /> */}
        {/* <TaskDashboard /> */}
        {/* Work Order Dashboard *  /}
        {/* Contact Dashboard */}
      </section>
      <Outlet />
    </>
  );
}

export default Dashboard;
