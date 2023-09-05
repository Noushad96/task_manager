import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";
import Nav from "./Nav";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  // const [Completion, setCompletion] = useState(false);

  // const [toggleButtonText, setToggleButtonText] = useState(false);

  const [buttonStates, setButtonStates] = useState([]);

  const handleToggle = (e, id) => {
    // setCompletion(!Completion);
    // console.log("toggle id", id);
    // console.log(e.target.checked);
    setButtonStates((prevStates) => {
      // console.log("prevStates==>", prevStates);
      // prevStates = prevStates.filter((state) => state.id !== 0);

      // console.log("prevStates new==>", prevStates);

      const newStates = [...prevStates];
      // const newStates = [];
      // console.log("newStates=>", newStates);
      newStates[id] = !newStates[id];
      // console.log("newStates after", id);
      // console.log("newStates after", newStates);
      return newStates;
    });
  };

  const users = useSelector((state) => state.users);
  // console.log("users ==>", users);

  const myusers = users.filter((user) => user.id !== 0);
  // console.log("myusers ==>", myusers);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const handleCheckboxChange = (event, id) => {
    // setIsChecked(event.target.checked);
    // setToggleButtonText(event.target.checked);

    setButtonStates((prevStates) => {
      // console.log("prevStates==>", prevStates);
      // prevStates = prevStates.filter((state) => state.id !== 0);

      // console.log("prevStates new==>", prevStates);

      const newStates = [...prevStates];
      // const newStates = [];
      // console.log("newStates=>", newStates);
      newStates[id] = !newStates[id];
      // console.log("newStates after", id);
      // console.log("newStates after", newStates);
      return newStates;
    });
    console.log("checked => ", event.target.checked);
    console.log("checked ID =>", id);
  };
  // console.log("checked isChecked=> ", isChecked);

  return (
    <div className="Home container pt-10  ">
      <div className="heading flex  font-semibold mb-[5px] border-2 border-[#0dcaf0]">
        <div className="w-[10%] sm:w-[8%] border-r-2 border-[#0dcaf0] text-center">
          Id
        </div>
        <div className="w-[20%] sm:w-[15%] border-r-2 border-[#0dcaf0] text-center">
          Check
        </div>
        <div className="w-[20%] border-r-2 border-[#0dcaf0] text-center">
          Task Title
        </div>
        <div className="w-[40%] border-r-2 border-[#0dcaf0] text-center">
          Task
        </div>
        <div className="w-[30%] border-r-2 border-[#0dcaf0] text-center">
          Action
        </div>
        <div className="w-[30%] text-center">Complete</div>
      </div>

      <div className="bodyContent">
        {myusers.map((user, index) => (
          <div
            key={index}
            className={`content ${user.id} ${
              buttonStates[user.id] ? "bg-[#77e577]" : ""
            }  flex  mb-[10px]  border-2 border-[#0dcaf0]
            } `}
          >
            <div className="w-[10%] sm:w-[8%] border-[#0dcaf0] border-r-2">
              &nbsp; {user.id}
            </div>

            <div className="w-[20%] sm:w-[15%] border-[#0dcaf0] border-r-2">
              &nbsp;
              <input
                key={user.id}
                type="checkbox"
                checked={user.isChecked}
                onChange={(event) => handleCheckboxChange(event, user.id)}
              />
            </div>

            <div className="w-[20%] border-[#0dcaf0] border-r-2">
              &nbsp; {user.name}
            </div>
            <div className="w-[40%] border-[#0dcaf0] border-r-2">
              &nbsp; {user.email}
            </div>
            <div className="w-[30%] grid lg:flex border-[#0dcaf0] border-r-2">
              <Link
                to={`/edit/${user.id}`}
                className="btn btn-sm btn-primary m-[5px]"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="btn btn-sm btn-danger m-[5px] lg:ms-2 "
              >
                Delete
              </button>
            </div>
            <div className={`task-Completion w-[30%] border-[#0dcaf0] `}>
              {/* <button
                key={index}
                onClick={(e) => handleToggle(e, user.id)}
                value={user.id}
              >
                {buttonStates[user.id] ? "Yes" : "No"}
              </button> */}
              {/* <span className="mr-[10px]">
                <input
                  key={user.id}
                  type="checkbox"
                  checked={user.isChecked}
                  onChange={(event) => handleCheckboxChange(event, user.id)}
                />
              </span> */}
              &nbsp; {buttonStates[user.id] ? "Yes completed" : "Not Completed"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
