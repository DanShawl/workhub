import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
