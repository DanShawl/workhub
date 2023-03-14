import ContactDashboard from '../components/ContactDashboard';
import DashboardSideBar from '../components/DashboardSideBar';
import TaskDashboard from '../components/TaskDashboard';
import { Link, Outlet } from 'react-router-dom';
function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        {/* <nav>
          <Link to="work-orders">Work Orders</Link>
          <Link to="contacts">Contacts</Link>
        </nav> */}
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
