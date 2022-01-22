import React from "react";

import "./Offers.css";

import agile from "../images/icons/agile.png";
import easy from "../images/icons/easy.png";
import hosting from "../images/icons/hosting.png";
import moneyBag from "../images/icons/money-bag.png";
import operator from "../images/icons/operator.png";
import responsiveDesign from "../images/icons/responsive-design.png";

const Offers = () => {
  return (
    <section className="offers">
      <h3>Features that we offer</h3>
      <div className="offers-boxes">
        <div className="offers-box">
          {/* Card 1 */}
          <article>
            <figure>
              <img alt="Operator Icon" src={operator} />
            </figure>
            <div>
              <h4>CONSULTATIONS</h4>
              <p>
                We will advise you throughout the whole process explaining every
                step of the process. We will make it easy, fast, and convenient
                for you.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article>
            <figure>
              <img alt="Money in bag Icon" src={moneyBag} />
            </figure>
            <div>
              <h4>AFFORDABLE PRICES</h4>
              <p>
                We know that everyone needs a website or an online store that is
                why we offer our service at the best affordable prices. No need
                to worry, more features could be added at any time!
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article>
            <figure>
              <img alt="Hosting Icon" src={hosting} />
            </figure>
            <div>
              <h4>HOSTING</h4>
              <p>
                We offer one-time payment for hosting to save you tons of money
                spent yearly. We know that hosting is expensive and costs money
                every month. Our ultimate goal is to save you as much money as
                possible after the completion of the project.
              </p>
            </div>
          </article>
        </div>

        <div className="offers-box">
          {/* Card 4 */}
          <article>
            <figure>
              <img alt="Easy Icon" src={easy} />
            </figure>
            <div>
              <h4>EASY USE </h4>
              <p>
                Would you like the possibility of making changes by yourself? We
                cant implement a full or micro admin panel for your business.
                You could change photos, texts, videos, prices, and promotions
                at any time!
              </p>
            </div>
          </article>

          {/* Card 5 */}
          <article>
            <figure>
              <img alt="Agile Icon" src={agile} />
            </figure>
            <div>
              <h4>APPROVED PROCESS</h4>
              <p>
                We are addicts of perfection. Every step will be explained and
                if questions are born, we are ready to answer them always! We
                please ourselves with user satisfaction.
              </p>
            </div>
          </article>

          {/* Card 6 */}
          <article>
            <figure>
              <img alt="Responsive Design Icon" src={responsiveDesign} />
            </figure>
            <div>
              <h4>RESPONSIVE DESIGN</h4>
              <p>
                We design our websites to be fully responsive. A stunning look
                is vital for both large devices and smaller ones. Nowadays, more
                than 80% of people surf the internet on their phones, therefore,
                we cover every aspect of the responsiveness of your web app!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Offers;
