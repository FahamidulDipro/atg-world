import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
const Article = ({ article }) => {
  const {
    catagory,
    postImage,
    title,
    details,
    name,
    userImg,
    views,
    date,
    location,
    btn,
    color,
  } = article;
  return (
    <Col lg={8}>
      <Card>
        <Card.Img variant="top" src={postImage} />
        <Card.Body className="text-start">
          <h5 className="my-3">{catagory}</h5>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-between my-3">
            <div>
              {date ? (
                <p className="fw-bold">
                  <BiCalendarEvent
                    style={{ fontSize: "30px" }}
                  ></BiCalendarEvent>
                  &nbsp;{date}
                </p>
              ) : null}
            </div>

            <div>
              {location ? (
                <p className="fw-bold">
                  <GoLocation style={{ fontSize: "20px" }}></GoLocation>
                  {location}
                </p>
              ) : null}
            </div>
          </div>
          {btn ? (
            <button
              className="w-100 my-4 rounded bg-white fw-bold p-2"
              style={{ border: `1px solid #A9AEB8`, color: `${color}` }}
            >
              {btn}
            </button>
          ) : null}
          <div className="d-flex justify-content-between ">
            <div className="w-100 text-start">
              {" "}
              <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column ">
                <div>
                  {" "}
                  <img
                    src={userImg}
                    alt="userImg"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="fw-bold ms-2">{name}</span>
                </div>
                <div className="ms-5 me-2">
                  <AiOutlineEye style={{ fontSize: "20px" }}></AiOutlineEye>
                  {views}k views{" "}
                </div>
              </div>
            </div>{" "}
            <button className="btn btn-light ms-1">
              <BsFillShareFill></BsFillShareFill>
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
