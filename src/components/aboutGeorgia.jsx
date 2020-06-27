import React from "react";
import Navbar from "./navbar";
import glassofwine from "../photos/glassofwine.jpg";
import "../CSS/aboutGeorgia.css";
import leaf from "../photos/leaf.png";

const AboutGeorgia = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="about-georgia">
        <div>
          <h1>Country Georgia</h1>
          <p className="text1">
            Located crossroads between Europe and Asia, Georgia, formerly named
            as Iberia, has cultural heritage both ancient and rich. If you have
            heard, that picturesque views, tradition of hospitality, both winter
            and summer resorts, rich cuisine and unique wine are all together in
            on country, that’s probably Georgia. Wine is the main component of
            their versatile culture. Also known as “Cradle of Wine”, Georgian
            Wine culture counts already 8000 years and almost 500 species of
            grapes are known to be cultivated in Georgia. Georgians have unique
            artistry of wine making, that has no analogue – that is “Kvevri”.
            “Kvevri” is various shapes and sizes of clay vessels, that are
            buried in the ground and leads creating true vintage wine, sometimes
            even of 50 years. “Kvevri” ensures enrich wine with different
            ferments, that ensures unique taste and feeling.
          </p>
        </div>
        <img className="glassofwine" src={glassofwine} />
      </div>

      <div className="toasting">
        <div>
          <img className="glassofwine2" src={glassofwine} />
        </div>
        <div>
          <h1>Toasting and Feasting</h1>
          <p>
            Georgia is exceptionally famous for its hospitality. They say: “A
            guest is from God”. They meet guests with various dishes on the
            table, the best wine and extremely warm and atmosphere. Georgia is
            famous for its long, emotional toasts. Toastmaster, also called as
            “Tamada”, leads feasting and ensures festive mood during the party.
            Georgian feasting is never complete without its traditional
            polyphonic songs, dancing and long beautiful poems. Georgians have
            traditional, obligatory toasts. Georgians love some specific vessels
            for different toasts. Most famous of them are horn and bowl.
          </p>
        </div>
      </div>
      <img className="leaf" src={leaf} alt="leaf" />
      <div className="last-blog">
        <div>
          <h1>Country Georgia</h1>
          <p className="text1">
            Located crossroads between Europe and Asia, Georgia, formerly named
            as Iberia, has cultural heritage both ancient and rich. If you have
            heard, that picturesque views, tradition of hospitality, both winter
            and summer resorts, rich cuisine and unique wine are all together in
            on country, that’s probably Georgia. Wine is the main component of
            their versatile culture. Also known as “Cradle of Wine”, Georgian
            Wine culture counts already 8000 years and almost 500 species of
            grapes are known to be cultivated in Georgia. Georgians have unique
            artistry of wine making, that has no analogue – that is “Kvevri”.
            “Kvevri” is various shapes and sizes of clay vessels, that are
            buried in the ground and leads creating true vintage wine, sometimes
            even of 50 years. “Kvevri” ensures enrich wine with different
            ferments, that ensures unique taste and feeling.
          </p>
        </div>
        <img className="leaf2" src={leaf} alt="leaf" />
        <img className="glassofwine" src={glassofwine} />
        <img className="leaf3" src={leaf} alt="leaf" />
      </div>
    </div>
  );
};

export default AboutGeorgia;
