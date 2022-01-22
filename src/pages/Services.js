import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Services.css";

import simpleDesign from "../images/simple-design.jpeg";
import ecommerce from "../images/ecommerce.jpeg";
import ecommerceChanging from "../images/ecommerce-changing.png";
import seo from "../images/seo.jpeg";
import analytics from "../images/analytics.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page">
      <Helmet>
        <title>ObelusSoft | Services</title>
      </Helmet>
      <div className="services-hero">
        <h1>Website Design</h1>
        <p>
          Our ultimate goal is to create aesthetically pleasing and modern
          websites, responsive and easy to navigate with the best representation
          of your brand. An outstanding website urges people to engage more and
          converts them into real customers!
        </p>
      </div>
      <div className="services-process">
        <h3>Special holiday discounts!</h3>
        <p className="p-center">
          We offer all our services, now only in December, with big discounts
          from -30% to -50%.
        </p>

        {/* Pricing Table */}
        <div class="price-table-wrapper">
          <div class="pricing-table">
            <h2 class="pricing-table__header">- WEBSITE DESIGN -</h2>
            <h3 class="pricing-table__price">Negotiable</h3>
            <Link class="pricing-table__button" to="/contact">
              Order now!
            </Link>
            <ul class="pricing-table__list">
              <li>Custom Modern Design</li>
              <li>Responsive</li>
              <li>Basic SEO Optimisation</li>
              <li>Fast Loading Time</li>
              <li>Security</li>
              <li>Maintenance</li>
              <li>Special Hosting Offer</li>
            </ul>
          </div>
          <div class="pricing-table">
            <h2 class="pricing-table__header">- E-COMMERCE STORE -</h2>
            <h3 class="pricing-table__price">Negotiable</h3>
            <Link class="pricing-table__button" to="/contact">
              Order now!
            </Link>
            <ul class="pricing-table__list">
              <li>Custom Modern Design</li>
              <li>Admin Panel</li>
              <li>Basic SEO Optimisation</li>
              <li>Special Custom Plugins</li>
              <li>Payments Integration</li>
              <li>Security</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div class="pricing-table">
            <h2 class="pricing-table__header">- SEO -</h2>
            <h3 class="pricing-table__price">Negotiable</h3>
            <Link class="pricing-table__button" to="/contact">
              Order now!
            </Link>
            <ul class="pricing-table__list">
              <li>Keywords targeting</li>
              <li>On-Page / Off-Page Optimisation</li>
              <li>Fastest Loading Time</li>
              <li>More Organic Traffic</li>
              <li>Better User Experience</li>
              <li>Image Enhancement</li>
              <li>Competition Analysis </li>
            </ul>
          </div>
        </div>

        <p className="spec-p">
          We work mainly with people from Bulgaria and other countries! We
          accept BGN, EURO and GBP as payment currency! Our support speaks
          English and Bulgarian!
        </p>
        {/* Pricing Table End */}
        <h3>Our Design Process</h3>
        <h4>We design the website, you focus on your business!</h4>
        <p>
          Creating a modern and splendid website requires a lot of years of
          experience and in-depth knowledge of modern technologies and tools.
          Our team of professionalists will cover not only all of your must-have
          features but also will exceed your expectations for a quality and
          unique SEO-optimised website that is engaging with your customers.
        </p>

        <img src={simpleDesign} alt="Simple Design Image" />

        <h4>Speed, security, functionality - the three principles we follow</h4>
        <p>
          We use and follow the latest trends in the Internet space so we can
          offer custom and extraordinary website designs. We specialise in
          creating clean and structured hand-coded website systems with React.JS
          and Vue.JS as our main framework technologies. We also create unique
          websites with Shopify and WordPress for those who want to use
          E-commerce content management systems. We guarantee:
        </p>

        <div className="services-boxes">
          <div className="services-box">
            {/* Card1 */}
            <h5>Speed</h5>
            <i class="fas fa-tachometer-alt"></i>
            <p>
              Speed is one of the most crucial requirements for a website to be
              engaging. We guarantee fast load time to keep your users on your
              website without forcing them to wait for images or text to load.
              Also, it is a key factor for ranking your business in search
              engines.
            </p>
          </div>

          {/* Card2 */}
          <div className="services-box">
            <h5>Security</h5>
            <i class="fas fa-user-shield"></i>
            <p>
              Security plays an important role when it comes to online payments
              or using customer's data. We use modern top-notch protections
              while hiding important data to better protect from hackers.
            </p>
          </div>

          {/* Card3 */}
          <div className="services-box">
            <h5>Functionality</h5>
            <i class="fab fa-sketch"></i>
            <p>
              The entire design and functionality of your website are in line
              with the expectations of your potential audience. Customers can
              easily navigate around from one page to another, finding the
              information they need and engage with your website.
            </p>
          </div>
        </div>

        <h3>E-Commerce Website</h3>
        <div className="services-ecommerce">
          <img src={ecommerce} alt="E-Commerce Image" />
          <h5>
            We will make your website so that it is easy for people to buy
            things.
          </h5>
          <p>
            We use modern techniques and integrations of useful tools to make
            your website one of a kind. Displaying urgency or promotions are a
            way to make a customer purchase a product. We know what is important
            and how to present the necessary information for your successful
            online business.
          </p>

          <div className="services-ecommerce-box">
            <img src={ecommerceChanging} alt="E-Commerce Changing Image" />
            <div className="services-ecommerce-box-cont">
              <h6>
                We create an experience for the customers that last a long time.
              </h6>
              <p>
                The needs of your customers are changing all the time. We create
                an admin panel with a content management system that lets you
                add and remove products, change prices, set up promotions and
                more!
              </p>
            </div>
          </div>

          <div className="services-secure-payments">
            <h5>Secure Payment Integration</h5>
            <p>
              Your customers should have confidence when purchasing an item,
              therefore, trusted and proven payment services are essential for
              the security and transparency of the clients.
            </p>
          </div>
        </div>

        <h3>Website Optimization SEO</h3>
        <div className="services-seo">
          <p>
            With the growing demand for online shopping growing by the day, we
            make your project competitive so that it is recognised by Google and
            other search engines. We find the right keywords to target the exact
            audience. We implement onpage and offpage otimisation as well.
          </p>
          <div className="services-seo-box">
            <div className="services-seo-cont">
              <h6>Audience Targeting</h6>
              <p>
                To succeed a website has to know its exact audience. We analyse
                keywords that customers use to search for a niche on Google,
                therefore, finding the right clients for your business.
              </p>
            </div>
            <img src={seo} alt="SEO Image" />
          </div>

          <div className="services-seo-analytics">
            <img src={analytics} alt="Analytics Image" />
            <div className="services-seo-analytics-cont">
              <h6>Analytics & Conversion Tracking</h6>
              <p>
                After you launch your new website, it is important to know how
                people are using it. We will use Google Analytics and other
                analytics tools to measure how much traffic you get and how many
                sales you make each day.
              </p>
              <p>
                Also, we keep track of how many engagements a certain feature
                has. For example, if you want to find out about the number of
                forms filled out or banners clicked, we can implement that!
              </p>
            </div>
          </div>
        </div>

        <h4 className="services-order-now">Order your website now!</h4>
        <Link to="/contact" className="services-button">
          <button>Order now</button>
        </Link>
      </div>
    </main>
  );
};

export default Services;
