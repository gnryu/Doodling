import styled from "styled-components";
import Footer from "../../components/Footer";

import PointImage from "../../img/Point.svg";
import Landing1 from "./Landing1_main";
import Landing2 from "./Landing2_statistics";
import Landing3 from "./Landing3_features";
import Landing4 from "./Landing4_plan";

export default function Landing() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />

      <Point src={PointImage} />
    </div>
  );
}

const Point = styled.img`
  width: 35%;
  position: absolute;
  right: 0;
  top: 1200px;
`;
