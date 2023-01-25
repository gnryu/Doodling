import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing1 from "./components/Landing1_main";
import Landing2 from "./components/Landing2_statistics";
import Landing3 from "./components/Landing3_features";
import Landing4 from "./components/Landing4_plan";
import "./css/landing.css";
import "./index.css";

import PointImage from "./img/Point.svg";

export default function Landing() {
  return (
    <div className="App">
      <Header />
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Footer />

      <Point src={PointImage} />
    </div>
  );
}

const Point = styled.img`
  width: 30%;
  position: absolute;
  right: 0;
  top: 900px;
`;
