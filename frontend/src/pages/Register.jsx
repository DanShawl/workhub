import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import WorkhubDemo from '../assets/Workhub-sample-image.png';

/* ----------- Register Page: User login inputs ----------- */

function Register() {
  //  State items for register form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

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

  //  Sends user data to authorize via register function / checks password confirmation
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
      <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100">
        <section className=" mt-36 sm:mt-12 md:mt-0 mx-4 md:flex-1 flex justify-center md:items-center -mb-14 md:mb-0">
          <img src={WorkhubDemo} alt="" className=" w-full md:max-w-[85%]" />
        </section>

        <section className=" px-4 flex-1 md:border-l md:border-zinc-200 md:max-w-lg lg:max-w-xl md:pl-12 lg:mr-20 pb-12 sm:pb-0">
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
            <h3>Sign Up</h3>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className="">
              <input
                type="text"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 outline-[#ff5c35] text-sm"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onFormChange}
              />
            </div>
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
              <input
                type="password"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 text-sm outline-[#ff5c35]"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={onFormChange}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className=" my-2 flex justify-center items-center gap-1 font-bold bg-[#ff5c35] rounded-sm w-full py-3 text-white md:w-36 md:mt-2 hover:bg-[#de5b34]"
                // [#f16232]
                // [#6870fa]
              >
                Sign Up Now
              </button>
            </div>
          </form>
        </section>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <section className=" px-4 pt-24 md:pt-0 lg:min-w-[60%] pb-8 md:pl-20 lg:pl-52 md:flex-1 md:max-w-2xl lg:max-w-3xl md:pr-10">
          <div className="">
            <h1 className=" text-4xl md:text-5xl md:leading-[1.05] lg:text-6xl mb-8">
              Easily manage your day-to-day facility management tasks.
            </h1>
            <p className="md:text-2xl text-zinc-600">
              With WorkHub's easy-to-use and simplified facility management
              software, you'll have all of your tasks, work orders, and
              equipment reports in one place.
            </p>
          </div>
        </section>

        <section className=" px-4 w-full flex-1 md:border-l md:border-zinc-200 md:max-w-lg lg:max-w-xl md:pl-12 lg:mr-20">
          <div className="hidden md:block">
            <h1>Register</h1>
            <p>Create an account.</p>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className="">
              <input
                type="text"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onFormChange}
              />
            </div>
            <div className="">
              <input
                type="email"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2"
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
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2"
                id="password"
                name="password"
                value={password}
                placeholder="Enter a password"
                onChange={onFormChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={onFormChange}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className=" my-2 flex justify-center items-center gap-1 font-extrabold bg-[#f16232] rounded-[3px] w-full py-3 text-white md:w-fit md:px-4 md:mt-2 hover:bg-[#de5b34]"
              >
                Register Now
              </button>
            </div>
          </form>
        </section>
      </div> */}
    </>
  );
}
export default Register;

// (node:29168) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please
// use the 'setupMiddlewares' option.
