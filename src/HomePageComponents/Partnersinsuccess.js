import React from "react";
import Community from "../Assets/images/ic-community.svg";
import Personal from "../Assets/images/ic-personal.svg";
import Portal from "../Assets/images/ic-portal.svg";
import Videos from "../Assets/images/ic-videos.svg";

class Partnersinsuccess extends React.Component {
  render() {
    return (
      <>
        <section className="partners text-center">
          <section className="container p-0">
            <h2 className="text-uppercase">Partners in Success</h2>
            <p className="text-center">We’re committed to helping you succeed and have assembled a powerful set of tools to help you profit.</p>
            <section className="row d-flex flex-row m-0 justify-content-center align-items-start position-relative">
              <section className="youus d-flex justify-content-center align-items-center">
                YOU
                <br />
                &amp; US
              </section>
              <aside className="col-lg-6 col-md-6 col-12 gray-box p-0">
                <h3>Community</h3>
                <p>
                  The Scout &amp; Cellar Consultant community is always around to help. Reach out to your referring Consultant or the Scout &amp; Cellar Consultant Support team to work past questions
                  or challenges as they arise.
                </p>
                <span className="ic-gray-box">
                  <img src={Community} alt="" className="img-fluid" />
                </span>
              </aside>
              <aside className="col-lg-6 col-md-6 col-12 gray-box p-0">
                <h3>Your Personal Website</h3>
                <p>
                  When you sign up, you claim your own digital storefront
                  <a href="https://scoutandcellar.com/yourname" title="www.scoutandcellar.com/yourname">
                    (www.scoutandcellar.com/yourname)
                  </a>
                  which you can use on all your marketing efforts. All sales from your store accrue to your credit.
                </p>
                <span className="ic-gray-box">
                  <img src={Personal} alt="" className="img-fluid" />
                </span>
              </aside>
              <aside className="col-lg-6 col-md-6 col-12 gray-box p-0">
                <h3>Consultant Portal</h3>
                <p>Track your sales, customers, earnings and more, from one easy-to-use online interface.</p>
                <span className="ic-gray-box position-bottom">
                  <img src={Portal} alt="" className="img-fluid" />
                </span>
              </aside>
              <aside className="col-lg-6 col-md-6 col-12 gray-box p-0">
                <h3>Training Videos</h3>
                <p>Whether it’s using our tools or helping you sell, our vast library of videos will help you get selling, right away.</p>
                <span className="ic-gray-box position-bottom">
                  <img src={Videos} alt="" className="img-fluid" />
                </span>
              </aside>
            </section>
            <a className="btn btn-primary" href="javascript:;" role="button" title="LET'S BEGIN">
              Let’s Begin
            </a>
          </section>
        </section>
      </>
    );
  }
}

export default Partnersinsuccess;
