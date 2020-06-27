import React from "react";
import "../CSS/homePage.css";
import WineExample from "./wineExample";
import websiteCover from "../photos/grapes-vineyard.png";
import Navbar from "./navbar";

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <img className="cover" src={websiteCover} alt="Cover" />
      <Navbar />

      <div className="homepage-contaier">
        <h1 className="wineQuote">
          '"Wine is the only artwork you can drink." - Luis Fernando Oliverri'
        </h1>
        <div className="below-quote_section">
          <div className="aboutus_section">
            <h3>About Us</h3>
            <p>
              For 8000 years of continuous wine making tradition, Georgia has
              deservedly named as “ Cradle of Wine”. The love Georgians have
              shared to grapes is immortal till modernity. Georgians have
              developed unique technique for wine making – “Qvevri”, that has no
              analogue in whole world. Our mission is to introduce this unique
              piece of art, what is called Georigan wine, to US, share exquisite
              taste and tell the untold story in this way.
            </p>
          </div>
          <div className="partners_section">
            <h3>Our Partners</h3>
            <h4>Here are logos dinamically</h4>
          </div>
        </div>

        {/* <div className="home-blog_section">
          <BlogExample
            title={"About Georgia"}
            src={blackandwhite}
            description={"This is description of About Georgia"}
          />
          <BlogExample
            title={"About Georgia"}
            src={blackandwhite}
            description={"This is description of About Georgia"}
          />
          <BlogExample
            title={"About Georgia"}
            src={blackandwhite}
            description={"This is description of About Georgia"}
          />
        </div> */}

        <div className="products_section">
          <WineExample />
          <WineExample />
          <WineExample />
          <WineExample />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
