import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactDashboard from './components/ContactDashboard';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <>
      <Router>
        <div className="md:w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="work-orders" element={<TaskDashboard />} />
              <Route path="contacts" element={<ContactDashboard />} />
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

// Proxy error: Could not proxy request /api/tasks/ from localhost:3000 to http://localhost:5000/.
// [1] See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).
