import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/UserReducer";

const Update = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  // console.log("users==>", users);

  const existingUser = users?.filter((users) => users.id == id);
  // console.log("existingUser", existingUser);

  const { name, email } = existingUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100  justify-content-center ">
      <div className="w-[90%] sm:w-[60%] border bg-[#ffecd8] rounded-md text-white p-5">
        <h3 className="text-[black]">Update the Task</h3>

        <form onSubmit={handleUpdate} className="leading-10">
          <div>
            <label htmlFor="name" className="text-[black]">
              Title:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Title"
              value={uname}
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
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <br /> */}
          <button className="btn btn-info ">Submit</button>
          <Link to="/" className="text-[black] pl-2">
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
