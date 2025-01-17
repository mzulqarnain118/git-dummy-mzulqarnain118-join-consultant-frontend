import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Getin from "../Assets/images/ic-getin.svg";
import Gettrained from "../Assets/images/ic-gettrained.svg";
import Getgrowing from "../Assets/images/ic-getgrowing.svg";
import CourtneyBono from "../Assets/images/CourtneyBono.jpg";
import { Link } from "react-router-dom";

var slidesettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
class Howdoesitwork extends React.Component {
  render() {
    return (
      <>
        <section className="howdoes text-center position-relative">
          <section className="consult-lft-dts">
            <figure className="consult-img">
              <img src={CourtneyBono} className="img-fluid" alt="" />
              <p>
                <sup className="topqt">‘</sup>Scout &amp; Cellar has opened my
                eyes to seeing a much bigger future for myself. I have always
                been building something to benefit a large company, and now my
                focus has shifted to building something of my own.
                <sup className="btmqt">’</sup>
              </p>
              <h5>Courtney Bono</h5>
            </figure>
          </section>
          <section className="container p-0">
            <h2 className="text-uppercase">How does it work?</h2>
            <section className="row d-flex flex-row m-0 justify-content-center align-items-start">
              <Slider {...slidesettings}>
                <aside className="col-lg-4 col-md-4 col-12 dot-line">
                  <section className="howdoes-list">
                    <figure className="d-flex justify-content-center align-items-center">
                      <img src={Getin} alt="GET IN" className="img-fluid" />
                    </figure>
                  </section>
                  <h3>Join</h3>
                  <p>
                    “Start your journey by joining the Scout &amp; Cellar
                    Family. Go through the Consultant registration process so we
                    can get to know each other! Let us know if you will be doing
                    business as an individual or an entity, and then purchase
                    your Business Basics Kit. Welcome to the Family!”
                  </p>
                </aside>
                <aside className="col-lg-4 col-md-4 col-12  dot-line">
                  <section className="howdoes-list">
                    <figure className="d-flex justify-content-center align-items-center">
                      <img
                        src={Gettrained}
                        alt="GET IN"
                        className="img-fluid"
                      />
                    </figure>
                  </section>
                  <h3>Learn</h3>
                  <p>
                    “You’re now part of the family, we are so glad to have you
                    here! The first thing New Consultants should do is attend
                    Scout School. Scout School is our online education series
                    where you will learn all about Scout &amp; Cellar and your
                    new business. We also offer a large variety of tools and
                    educational resources to help you always continue learning
                    how to grow your business."
                  </p>
                </aside>
                <aside className="col-lg-4 col-md-4 col-12  dot-line">
                  <section className="howdoes-list">
                    <figure className="d-flex justify-content-center align-items-center">
                      <img
                        src={Getgrowing}
                        alt="GET IN"
                        className="img-fluid"
                      />
                    </figure>
                  </section>
                  <h3>Grow</h3>
                  <p>
                    “Once you have learned about Scout &amp; Cellar, and your
                    new business, it’s time to start growing! Start introducing
                    Clean-Crafted™ wine to your friends, hosting tastings, and
                    sharing the opportunity with others to build your team.”
                  </p>
                </aside>
              </Slider>
            </section>
            <Link
              className="btn btn-primary"
              to="/consultant"
              role="button"
              title="GET GOING"
            >
              {" "}
              GET GOING
            </Link>
          </section>
        </section>
      </>
    );
  }
}

export default Howdoesitwork;
