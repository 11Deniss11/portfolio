import { useEffect } from "react";
import FrostGlassBox from "../components/FrostGlassBox";
import picture from "../assets/Picture.jpg";

interface Props {
  setPageName: (pageName: string) => void;
  setBackgroundColourTop: (colour: number[]) => void;
  setBackgroundColourBottom: (colour: number[]) => void;
}

function Home({
  setPageName,
  setBackgroundColourBottom,
  setBackgroundColourTop,
}: Props) {
  useEffect(() => {
    setPageName("Home");
    setBackgroundColourTop([120, 120, 120]);
    setBackgroundColourBottom([33, 33, 33]);
  }, [setPageName]);
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          left: "5%",
          width: "50%",
          height: "75%",
          paddingLeft: "2%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1>Denis Cuznetov</h1>
        <h4 style={{ marginTop: "-3%" }}> Email: nope</h4>
        <h4 style={{ marginTop: "-3%" }}> Phone: nope</h4>
        <h2 style={{ marginTop: "-1%" }}>
          Student at STEM Innovation Academy, Graduating 2025
        </h2>
        <h3>Interested in Computer Science, Robotics, and Engineering</h3>
        <h3>Lead Autonomous Programmer on the Sparkans Robotics Team</h3>
        <h3>Skills Used in Projects, School, and the Robotics Team:</h3>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <h4>
            • CAD with Fusion 360 <br /> • Robotics with Command-Based Java
            <br /> • AI and Image Processing with Python <br /> • Basic 3D
            Rendering with C
            <br /> • Blender 3D Modelling
          </h4>
          <h4 style={{ marginLeft: "2%" }}>
            • Unity Game Development with C# <br /> • Web Development with React
            and Typescript
            <br /> • Embedded Esp-32 and Arduino with C++
            <br /> • Mobile development with React Native and .NET MAUI
            <br /> • Blender 3D Animation
          </h4>
        </div>
      </FrostGlassBox>
      <FrostGlassBox
        divStyle={{
          top: "15%",
          right: "5%",
          width: "30%",
          height: "75%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={picture}
          alt="Image of Denis Cuznetov"
          style={{
            marginLeft: "7%",
            width: "85%",
            objectFit: "contain",
          }}
        />
      </FrostGlassBox>
    </div>
  );
}

export default Home;
