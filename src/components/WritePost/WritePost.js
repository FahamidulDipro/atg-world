import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { TbAlertCircle } from "react-icons/tb";
const WritePost = () => {
  return (
    <div className="text-start">
      <div className="d-flex">
        <input
          type="text"
          value="Nodia, India"
          className="border-top-0 border-end-0 border-start-0 shadow-none"
        />{" "}
        <BsFillPencilFill></BsFillPencilFill>
      </div>
      <br />
      <TbAlertCircle></TbAlertCircle>
      <small className="ms-2 text-secondary ">
        Your location will help us serve better and extend a personalised
        experience.
      </small>
    </div>
  );
};

export default WritePost;
