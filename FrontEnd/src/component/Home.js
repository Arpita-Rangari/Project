import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../css/home.css";
import h1 from "../public/Homeimages/h1.jpg";
import h2 from "../public/Homeimages/homee1.jpg";
import h3 from "../public/Homeimages/home11.jpg";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption>
            <font color="black">
              <h3>Learn from anywhere</h3>
            </font>

            <p>
              <Button variant="light">Register now!!</Button>
            </p>
          </Carousel.Caption>
          <img className="d-block w-100" src={h1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <font color="black">
              <h3>Achieve more with CoachPro</h3>
            </font>
            <p>
              <Button variant="light">Register now!!</Button>
            </p>
          </Carousel.Caption>
          <img className="d-block w-100" src={h2} alt="second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <font color="black">
              {" "}
              <h3>Explore Courses</h3>
            </font>
            <p>
              <Button variant="light">Register now!!</Button>
            </p>
          </Carousel.Caption>
          <img className="d-block w-100" src={h3} alt="third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home;
