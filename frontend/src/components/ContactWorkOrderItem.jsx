import { CiMail, CiPhone } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
import { BiMinusCircle } from 'react-icons/bi';
const ContactWorkOrderItem = ({ task, removeWorkOrder }) => {
  return (
    <li className="grid grid-cols-2 gap-y-4 sm:gap-y-0 sm:grid-cols-5 w-full px-6 py-4 gap-x-6 border-[1px] sm:border-0 sm:border-b-[1px] border-gray-200 hover:cursor-pointer hover:bg-[#f2f2f2] font-sans text-xs">
      <div className="flex items-center gap-x-2 col-span-2 sm:col-span-1">
        <div>
          <p className="font-semibold">{task.text}</p>
          <div>
            <p className="text-[#6b6b6b] text-[10px]">
              Created on{' '}
              <span className="">
                {new Date(task.createdAt).toLocaleString('default', {
                  day: 'numeric',
                })}{' '}
              </span>
              <span className="">
                {new Date(task.createdAt).toLocaleString('default', {
                  month: 'long',
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden sm:flex items-center gap-x-2">
        <CiMail />
        <p>{task.taskStatus}</p>
      </div>

      <div className=" hidden sm:flex items-center gap-x-2">
        <CiPhone />
        <p>{task.priority}</p>
      </div>
      <div className="hidden sm:flex items-center">
        {/* <p>{contact.company}</p> */}
      </div>
      <div className="hidden sm:flex items-center justify-end">
        <button
          onClick={() => removeWorkOrder(task._id)}
          className="font-sans flex items-center gap-x-1 text-red-600 p-2 hover:bg-red-500 rounded-sm hover:text-white"
        >
          Remove
          {/* <p className="pb-[2px] hover:text-white text-red-600">Remove</p> */}
          <BiMinusCircle className="text-xs mt-[2px]" />
        </button>
      </div>
    </li>
  );
};

export default ContactWorkOrderItem;
