import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactDashboard from './components/ContactDashboard';
import TaskDashboard from './components/TaskDashboard';
import ContactPage from './components/ContactPage';
import DashboardHome from './components/DashboardHome';

function App() {
  return (
    <>
      <Router>
        <div className="md:w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<DashboardHome />} />
              <Route path="work-orders" element={<TaskDashboard />} />
              <Route path="contacts" element={<ContactDashboard />} />
              <Route path="contacts/:id" element={<ContactPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
