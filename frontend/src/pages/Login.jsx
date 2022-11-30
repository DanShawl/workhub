import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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
  }, [user, message, isError, isSuccess, navigate, dispatch]);

  const onFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
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

        <section className=" px-4 flex-1 md:border-l md:border-zinc-200 md:max-w-lg lg:max-w-xl md:pl-12 lg:mr-20">
          {' '}
          <div className="hidden md:block">
            <h1>Login</h1>
            <p>Please sign in.</p>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className="">
              <input
                type="email"
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 outline-1 outline-[#f16232]"
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
                className=" border-zinc-200 border w-full px-2 py-3 rounded-md my-2 outline-1 outline-[#f16232]"
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
                className=" my-2 flex justify-center items-center gap-1 font-extrabold bg-[#f16232] rounded-[3px] w-full py-3 text-white md:w-28 md:mt-2 hover:bg-[#de5b34]"
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
