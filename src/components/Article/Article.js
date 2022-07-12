import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
const Article = ({ article }) => {
  const { catagory, postImage, title, details, name, userImg, views } = article;
  return (
    <Col lg={8}>
      <Card>
        <Card.Img variant="top" src={postImage} />
        <Card.Body className="text-start">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
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
