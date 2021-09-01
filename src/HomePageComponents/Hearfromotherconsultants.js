import Hear from "../Assets/images/Hear.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
var settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
class Hearfromotherconsultants extends React.Component {
  render() {
    return (
      <>
        <section className="hearfrom text-center d-xl-none">
          <section className="container p-0">
            <h2 className="text-uppercase">Hear from other Consultants</h2>
            <section className="row d-flex flex-row m-0 justify-content-center align-items-center">
              <Slider {...settings}>
                <section className="hearfrom-slide">
                  <aside className="col-lg-4 col-md-4 col-12 hearfrom-img d-inline-block align-top">
                    <img src={Hear} alt="" className="img-fluid" />
                  </aside>
                  <aside className="col-lg-8 col-md-8 col-12 hearfrom-cont d-inline-block align-top">
                    <p>
                      I love working as part of an entrepreneurial company that
                      offers huge growth opportunities and flexibility. If you
                      are looking for an opportunity to be part of something
                      truly different and help pioneer a new way for people to
                      experience wine, then join us!
                    </p>
                    <h3>
                      - Chris Hite
                      {/* <br />
                      <span>Senior Consultant, StarBucks</span> */}
                    </h3>
                  </aside>
                </section>
                <section className="hearfrom-slide">
                  <aside className="col-lg-4 col-md-4 col-12 hearfrom-img d-inline-block align-top">
                    <img src={Hear} alt="" className="img-fluid" />
                  </aside>
                  <aside className="col-lg-8 col-md-8 col-12 hearfrom-cont d-inline-block align-top">
                    <p>
                      Scout &amp; Cellar has opened my eyes to seeing a much
                      bigger future for myself. I have always been building
                      something to benefit a large company, and now my focus has
                      shifted to building something of my own.
                    </p>
                    <h3>
                      - Courtney Bono
                      {/* <br />
                      <span>Senior Consultant, StarBucks</span> */}
                    </h3>
                  </aside>
                </section>
                <section className="hearfrom-slide">
                  <aside className="col-lg-4 col-md-4 col-12 hearfrom-img d-inline-block align-top">
                    <img src={Hear} alt="" className="img-fluid" />
                  </aside>
                  <aside className="col-lg-8 col-md-8 col-12 hearfrom-cont d-inline-block align-top">
                    <p>
                      We’ve been challenged and fulfilled through this
                      opportunity, and the success we’ve experienced has
                      encouraged us to continue pushing to achieve greater
                      goals.
                    </p>
                    <h3>
                      - Shelly Hoke, Ann Thompson and Lisa Oldham
                      {/* <br />
                      <span>Senior Consultant, StarBucks</span> */}
                    </h3>
                  </aside>
                </section>
              </Slider>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default Hearfromotherconsultants;
