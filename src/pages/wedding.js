import React from "react"
import "../components/styles.css";
import ReactFullpage from "@fullpage/react-fullpage";
import flowers from "../images/flowers-3.png";

const Wedding = () => (
<ReactFullpage
    /* Options here */
    scrollingSpeed = {800}
    sectionsColor = {['#E7EBEC', '#425554']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section landing">
            <img src={flowers} />
            <div>
              <span class="name">DAVID</span>
              <span class="wedding-font">and</span> 
              <span class="name">KAREN</span>
            </div>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
          </div>
          <div className="section">
            <p>
              <span className="name" style={{color: '#E7EBEC'}}>WE'RE GETTING MARRIED!</span>
            </p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Wedding
