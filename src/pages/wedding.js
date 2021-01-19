import React from "react"
import "../components/styles.css";
import ReactFullpage from "@fullpage/react-fullpage";
import flowers from "../images/flower-5.png";

const Wedding = () => (
  <ReactFullpage
    /* Options here */
    scrollingSpeed={800}
    sectionsColor={['#E7EBEC', '#425554']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="landing-image">
              <img src={flowers} alt="left-flower" className="landing-image-left" />
              <img src={flowers} alt="right-flower" className="landing-image-right" />
            </div>
            <div className="centered landing-text">
              <span className="name">KAREN</span>
              <br />
              <span className="wedding-font">and</span>
              <br />
              <span className="name">DAVID</span>
            </div>
          </div>
          <div className="section">
            <p>
              <span className="name" style={{ color: '#E7EBEC' }}>WE'RE GETTING MARRIED!</span>
            </p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Wedding
