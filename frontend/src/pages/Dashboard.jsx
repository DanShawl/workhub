import ContactDashboard from '../components/ContactDashboard';
import DashboardSideBar from '../components/DashboardSideBar';
import TaskDashboard from '../components/TaskDashboard';

function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        {/* <ContactDashboard /> */}
        <TaskDashboard />
        {/* Work Order Dashboard *  /}
        {/* Contact Dashboard */}
      </section>
    </>
  );
}

export default Dashboard;
