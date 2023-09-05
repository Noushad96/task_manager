import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// display: flex;
//     gap: 10px;
//     justify-content: center;

const Nav = () => {
  return (
    <>
      <div className=" pt-10 text-center bg-[#dae0f5]">
        <h2 className="font-semibold">Task Management App</h2>
        <div className="flex justify-center gap-x-[10px]">
          <Link to="/create" className="btn btn-info  my-3">
            Create Task +
          </Link>
          <Link to="/" className="btn btn-info  my-3">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
