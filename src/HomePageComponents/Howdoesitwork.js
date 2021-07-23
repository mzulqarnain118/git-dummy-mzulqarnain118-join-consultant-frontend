import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Getin from "../assets/images/ic-getin.svg";
import Gettrained from "../assets/images/ic-gettrained.svg";
import Getgrowing from "../assets/images/ic-getgrowing.svg";
import consultProfile from "../assets/images/Hear.png";
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
              <img src={consultProfile} className="img-fluid" />
              <p>
                <sup className="topqt">‘</sup>Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullam corper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                <sup className="btmqt">’</sup>
              </p>
              <h5>
                Courtney Bono<span>Senior Consultant, StarBucks</span>
              </h5>
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
                  <h3>Get In</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit.
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
                  <h3>Get Trained</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit.
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
                  <h3>Get Growing</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit.
                  </p>
                </aside>
              </Slider>
            </section>
            <a
              className="btn btn-primary"
              href="javascript:;"
              role="button"
              title="GET GOING"
            >
              {" "}
              GET GOING
            </a>
          </section>
        </section>
      </>
    );
  }
}

export default Howdoesitwork;
