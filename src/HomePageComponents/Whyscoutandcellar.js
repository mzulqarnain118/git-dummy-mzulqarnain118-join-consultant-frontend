import React from "react";
import ScoutCellar from "../assets/images/scout-cellar.png";

class Whyscoutandcellar extends React.Component {
  render() {
    return (
      <>
        <section className="whyscout">
          <section className="container p-0">
            <h2 className="text-uppercase text-center">
              Why Scout &amp; Cellar <sup>&#8482;</sup> ?
            </h2>
            <section className="row d-flex flex-row m-0 justify-content-start align-items-start">
              <aside className="col-lg-6 col-md-6 col-12 p-0">
                <h3>
                  Clean-Crafted<sup>&#8482;</sup>Wine
                </h3>
                <ul>
                  <li>Grown naturally</li>
                  <li>
                    Free from synthetic pesticides, added sugars and chemical
                    preservatives
                  </li>
                </ul>
                <h3>Made by a community of wine lovers</h3>
                <h3>Fast growing</h3>
                <ul>
                  <li>
                    The U.S. wine market is worth $72 billion. Scout &amp;
                    Cellar has doubled its growth year-on-year
                  </li>
                </ul>
              </aside>
              <aside className="col-lg-6 col-md-6 col-12 p-0">
                <img src={ScoutCellar} alt="" className="img-fluid" />
              </aside>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default Whyscoutandcellar;
