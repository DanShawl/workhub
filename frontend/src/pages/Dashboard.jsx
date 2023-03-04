import DashboardSideBar from '../components/DashboardSideBar';
import TaskDashboard from '../components/TaskDashboard';

function Dashboard() {
  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        <TaskDashboard />
        {/* Work Order Dashboard *  /}
        {/* Contact Dashboard */}
      </section>
    </>
  );
}

export default Dashboard;
