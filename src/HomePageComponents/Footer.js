import React from "react";
import Footerlogo from "../Assets/images/white-logo.png";
import Facebook from "../Assets/images/facebook.png";
import Youtube from "../Assets/images/youtube.png";
import Instagram from "../Assets/images/instagram.png";
import Chat from "../Assets/images/ic-chat.svg";
import Iconsubmit from "../Assets/images/ic-submit.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="container p-0 position-relative">
          <section className="row d-flex flex-row m-0 justify-content-center align-items-start footmenu">
            <aside className="col-lg-3 col-md-3 col-12 footlogo">
              <img src={Footerlogo} alt="" className="img-fluid" />
            </aside>
            <aside className="col-lg-2 col-md-2 col-12">
              <ul>
                <li>
                  <a href="javascript:;" title="WINE">
                    WINE
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="WINE CLUB">
                    WINE CLUB
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="MERCH">
                    MERCH
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="ABOUT CLEAN-CRAFTED">
                    ABOUT CLEAN-CRAFTED
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-lg-2 col-md-2 col-12">
              <ul>
                <li>
                  <a href="javascript:;" title="FIND A CONSULTANT">
                    FIND A CONSULTANT
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="BECOME A CONSULTANT">
                    BECOME A CONSULTANT
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="LOG IN AS A CONSULTANT">
                    LOG IN AS A CONSULTANT
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="WINERY TEAM CAREERS">
                    WINERY TEAM CAREERS
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="CONTACT US">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-lg-2 col-md-2 col-12">
              <ul>
                <li>
                  <a href="javascript:;" title="FAQS">
                    FAQS
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="SATISFACTION GUARANTEE">
                    SATISFACTION GUARANTEE
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="PRIVACY POLICY">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="javascript:;" title="TERMS AND CONDITIONS">
                    TERMS AND CONDITIONS
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-lg-3 col-md-3 col-12 join-mail">
              <p>Join our mailing list. Just like our wines, our emails contain only the good stuff.</p>
              <form class="form-inline">
                <input type="text" placeholder="Your Email" aria-label="Email input field" class="form-control" autocomplete="off" />
                <button aria-label="Submit button" type="submit" class="btn btn-outline-success">
                  <img src={Iconsubmit} alt="" />
                </button>
              </form>
            </aside>
          </section>
          <section className="row d-flex flex-row m-0 justify-content-center align-items-center text-center">
            <div class="col">
              <div class="justify-content-center">
                <a target="_blank" href="https://www.facebook.com/scoutandcellar/" className="ic-facebook">
                  <img src={Facebook} alt="" />
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCLatNJbkphQqr0L2sO8l7oQ" className="ic-facebook">
                  <img src={Youtube} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/scoutandcellar/" className="ic-facebook">
                  <img src={Instagram} alt="" />
                </a>
              </div>
            </div>
            <p className="clean">&copy;2021 Scout &amp; Cellar | Clean Crafted Commitment</p>
            <p className="simon">4531 Simonton Road Farmers Branch, TX 75244</p>
            <p>
              <em>*Ground shipping is included on orders of 6 or more bottles or cans within the contiguous United States. Eligibility restrictions may apply. </em>
            </p>
          </section>
        </section>
        <button type="button" className="button-v2" title="Chat with bot">
          <img src={Chat} alt="" />
        </button>
      </footer>
    </>
  );
};

export default Footer;