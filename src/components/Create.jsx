import { React, useState, useEffect } from "react";
import { addUser } from "../redux/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Nav.css";
// import { userList } from "./Data";

const Create = () => {
  //   const myStoreData = localStorage.getItem(key);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  // console.log("users", users);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name: name, email: email })
      // addUser({ id: users[users.length -1].id + 1, name: name, email: email })
    );
    navigate("/");
  };

  //   const myStorage = localStorage.setItem("myKeyData", JSON.stringify(users));
  //   console.log("mystorage", myStorage);

  //   useEffect(() => {
  //     JSON.parse(localStorage.getItem("myKeyData"));
  //   }, []);

  return (
    <>
      <div className="d-flex w-100  justify-content-center  ">
        <div className="w-[90%] sm:w-[60%] border rounded bg-[#ffecd8] rounded-md text-white p-5">
          {/* <div className="w-50 border bg-secondary rounded-md text-white p-5"> */}

          <h3 className="text-[black]">Add New Task</h3>
          <form onSubmit={handleSubmit} className="leading-10">
            <div>
              <label htmlFor="name" className="text-[black]">
                Title:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Title"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-[10px]">
              <label htmlFor="task" className="text-[black]">
                Task:
              </label>
              <input
                type="text"
                name="task"
                className="form-control"
                placeholder="Enter Task"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <br /> */}
            <button className="btn btn-info  ">Submit</button>
            <Link to="/" className="text-[black] pl-2">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
