import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import WorkhubDemo from '../assets/Workhub-sample-image.png';

/* ----------- Login Page: User login inputs ----------- */

function Login() {
  //  State items for login form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  State items from redux
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  //  Side effect to redirect user to dashboard on successful login
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, message, isError, isSuccess, navigate, dispatch]);

  //  Setting formData with form input
  const onFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //  Sends user data from formData to authorize via login function
  const onFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100">
        <section className=" mt-12 md:mt-0 mx-4 md:flex-1 flex justify-center md:items-center -mb-14 md:mb-0">
          <img src={WorkhubDemo} alt="" className=" w-full md:max-w-[85%]" />
        </section>

        <section className=" px-4 flex-1 md:border-l md:border-zinc-200 md:max-w-lg lg:max-w-xl md:pl-12 lg:mr-20">
          <div className="md:mb-10">
            <h1 className=" text-4xl md:text-5xl text-gray-800 font-bold">
              Easily manage your day-to-day facility tasks.
            </h1>
            <p className="md:text-md text-[#6b6b6b] font-normal">
              With WorkHub's easy-to-use and simplified facility management
              software, you'll be able to organize and manage tasks, work
              orders, assets, and more, all in one place.
            </p>

            <p className="md:text-md text-[#6b6b6b] font-normal mt-2">
              WorkHub can be accessed through a desktop or mobile device,
              allowing facility managers to remotely monitor and manage
              facilities from anywhere, at any time.
            </p>
          </div>{' '}
          <div className="hidden md:block">
            <h3>Login</h3>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className="">
              <input
                type="email"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 outline-1 outline-[#ff5c35] text-sm"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onFormChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 outline-1 outline-[#ff5c35] text-sm"
                id="password"
                name="password"
                value={password}
                placeholder="Enter a password"
                onChange={onFormChange}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className=" my-2 flex justify-center items-center gap-1 font-bold bg-[#ff5c35] rounded-sm w-full py-3 text-white md:w-28 md:mt-2 hover:bg-[#de5b34]"
                // [#f16232]
                // [#6870fa]
              >
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
