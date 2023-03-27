import { useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc';
import { BiPlus } from 'react-icons/bi';

const Dropdown = ({ tasks, workOrders, setWorkOrders, onWorkOrderSubmit }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div
        className=" hover:cursor-pointer py-2 px-4 sm:mt-2 justify-between flex gap-x-2 text-sm  items-center rounded-sm font-semibold text-[#6b6b6b] hover:bg-[#e2e2e2] bg-[#efefef] hover:text-[#212121] focus:bg-[#e2e2e2] "
        onClick={() => setOpen(!open)}
      >
        Add Work Orders
        <VscChevronDown
          className={`${
            open && 'rotate-180 text-[#ff5c35]'
          } hover:text-[#212121] text-[#6b6b6b]`}
        />
      </div>
      <ul
        className={`shadow-md mt-2 min-w-fit max-h-60 sm:max-h-72 overflow-x-scroll absolute right-4 bg-white border-[1px] border-gray-200 rounded overflow-y-auto p-2 ${
          open ? 'flex flex-col' : 'hidden'
        } `}
      >
        {tasks.length > 0 ? (
          tasks
            .filter((task) => {
              if (workOrders.some((id) => id === task._id) === false) {
                return true;
              } else return false;
            })
            .map((task) => (
              <li
                key={task._id}
                // value={task._id}
                className="flex justify-between max-w-[270px] gap-x-6 items-center p-2 hover:bg-[#efefef] rounded-sm cursor-pointer hover:text-[#ff5c35]"
                onClick={() =>
                  setWorkOrders((workOrders) => [...workOrders, task._id])
                }
              >
                <div className="flex flex-col">
                  <p className=" overflow-hidden whitespace-nowrap text-xs font-semibold">
                    {task.text.length > 25
                      ? task.text.substring(0, 25) + '...'
                      : task.text}
                  </p>
                  <p className=" text-[#6b6b6b] text-xs">{task.taskStatus}</p>
                </div>
                <div className="p-2 hover:bg-[#efefef] rounded-full">
                  <BiPlus className=" text-lg hover:text-[#ff5c35] cursor-pointer" />
                </div>
              </li>
            ))
        ) : (
          <li>There are no work orders to tag. </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
