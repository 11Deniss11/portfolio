import React, { useEffect } from "react";
import FrostGlassBox from "../components/FrostGlassBox";
import SparkansLogoSVG from "../assets/SparkansLogoSVG.svg";

interface Props {
  setPageName: (pageName: string) => void;
  setBackgroundColourTop: (colour: number[]) => void;
  setBackgroundColourBottom: (colour: number[]) => void;
}

function FirstRobotics({
  setPageName,
  setBackgroundColourTop,
  setBackgroundColourBottom,
}: Props) {
  useEffect(() => {
    setPageName("Sparkans Robotics");
    setBackgroundColourTop([60, 70, 80]);
    setBackgroundColourBottom([28, 32, 35]);
  }, [setPageName]);
  return (
    <div style={{ height: "200vh", overflow: "hidden" }}>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          left: "5%",
          right: "38vw",
          height: "60%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={textColour}>Team 9277: Sparkans</h1>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          right: "5%",
          height: "60%", // 28.7vw
          width: "29vw",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <img
          src={SparkansLogoSVG}
          alt="Sparkans Logo"
          style={{ width: "28vw", height: "28vw" }}
        />
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "80%",
          left: "5%",
          right: "5%",
          height: "80%",
          paddingLeft: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></FrostGlassBox>
    </div>
  );
}

const textColour: React.CSSProperties = {
  color: "rgba(65, 126, 186, 1)", // yellowy 175, 175, 167, bluey 53, 136, 219
};

export default FirstRobotics;
