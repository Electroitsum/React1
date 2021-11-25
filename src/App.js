// import { useState } from "react";
import "./App.css";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Mob from "./Images/mob.png";
import Numcard from "./components/Numcard";
import Suppcard from "./components/Suppcard";
import Carou from "./components/Carou";


function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div>
          <div className="container-fluid cover p-0">
            <span>
              <h1 className="display-1">Web Development Studio</h1>
              <p className="fs-4">
                Your guide to summiting the peak of digital success
              </p>
              <span className="bar"></span>
            </span>
          </div>
          <div className="container-fluid p-0">
            <span className="intro">
              <h2>Internet Marketing</h2>
              <p>
                Get a winning strategy for promoting your business online,
                including SEO, advertising and branding.
              </p>
            </span>
          </div>
          <div className="bdy">
            <Numcard />
          </div>
          <div className="container-fluid p-0">
            <span className="intro">
              <img src={Mob} alt="mobile" className="tablet" />
            </span>
          </div>
          <div className="road">
            <div className="roadhead m-5">
              <h2>Our Latest Projects</h2>
              <p>
                Today's marketing problems are complex, specialized and ever
                changing. Who can keep up with all the latest trends and
                technologies? We can.
              </p>
            </div>
            <div className="imgcon row">
              <div className="imgpattern img1 col-12 col-md" />
              <div className="imgpattern img2 col-12 col-md" />
              <div className="imgpattern img3 col-12 col-md" />
              <div className="imgpattern img4 col-12 col-md" />
              <div className="imgpattern img5 col-12 col-md" />
            </div>
            <Button className="btn m-5">Read More</Button>
          </div>
          <div className="about container-fluid">
            <div className="p-5">
              <h2>Why Us?</h2>
              <p>Your ingenious ideas. Our state-of-the-art web development</p>
            </div>
            <div className="acardcon row">
              <Suppcard Headin="Best Ideas" Para="Idea1" Icon="icon1" />
              <Suppcard Headin="Support 24/7" Para="Idea2" Icon="icon2"/>
            </div>
            <div className="acardcon row">
              <Suppcard Headin="Professional team" Para="Idea3" Icon="icon3"/>
              <Suppcard Headin="Quick work" Para="Idea4" Icon="icon4"/>
            </div>
          </div>
          <div className="container-fluid sucs">
            <div className="sucsCon row">
              <span className="hdPara col-12 col-md-3 m-4">
                <h2>Industry Expertise + Laser-Focused Team =</h2>
                <h1>SUCCESS</h1>
              </span>
              <span className="para col-12 col-md-3 m-4">
                <p>
                  Businesses know that a single, full-time marketing manager
                  simply cannot perform all the roles in digital marketing.
                  Comrade Web Agency positions itself as your digital marketing
                  partner: we cover all aspects of your website, branding,
                  digital marketing strategy, and data analysis, all while
                  owning our results (leads, calls, sales, conversions, targeted
                  traffic, etc).
                </p>
              </span>
              <span className="lapImg col-12 col-md-3 m-4"></span>
            </div>
          </div>
          <div>
            <Carousel>
              <Carousel.Item>
                <Carou Para = "para1" Img = "img1" Auth = "auth1"/>
              </Carousel.Item>

              <Carousel.Item>
              <Carou Para = "para2" Img = "img2" Auth = "auth2"/>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="foot">
            <p>
              Created by{" "}
              <a className="link link-warning" href="https:google.com">
                Sumit
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
