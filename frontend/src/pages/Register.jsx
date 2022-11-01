import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="login-register">
        <section className="heading login-register-heading">
          <div className="heading-info">
            <h1>Easily manage your day-to-day facility management tasks.</h1>
            <p>
              With WorkHub's easy-to-use and simplified facility management
              software, you'll have all of your tasks, work orders, and
              equipment reports in one place.
            </p>
          </div>
        </section>

        <section className="form login-form">
          <div className="heading-form">
            <h1>Register</h1>
            <p>Please create an account.</p>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onFormChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onFormChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter a password"
                onChange={onFormChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={onFormChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Register
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
export default Register;

// (node:29168) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please
// use the 'setupMiddlewares' option.
