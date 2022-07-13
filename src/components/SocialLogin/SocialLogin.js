import React from "react";
import { Button } from "react-bootstrap";

const SocialLogin = () => {
  return (
    <div className="mt-3">
      <Button
        variant=" w-100  my-3 text-start"
        style={{ border: "1px solid #D9D9DB" }}
      >
        <img
          src="../facebook.png"
          alt="facebookImg"
          style={{ height: "20px", marginRight: "10px" }}
        ></img>{" "}
        Sign up with Facebook{" "}
      </Button>
      <Button
        variant="outline-secondary w-100 text-start"
        style={{ border: "1px solid #D9D9DB" }}
      >
        <img
          src="../google.png"
          alt="googleImg"
          style={{ height: "20px", marginRight: "10px" }}
        ></img>{" "}
        Sign up with Google{" "}
      </Button>
    </div>
  );
};

export default SocialLogin;
