import { useEffect } from "react";
import FrostGlassBox from "../components/FrostGlassBox";

interface Props {
  setPageName: (pageName: string) => void;
  setBackgroundColourTop: (colour: number[]) => void;
  setBackgroundColourBottom: (colour: number[]) => void;
}

function About({
  setPageName,
  setBackgroundColourBottom,
  setBackgroundColourTop,
}: Props) {
  useEffect(() => {
    setPageName("Contact Me");
    setBackgroundColourTop([171, 189, 204]);
    setBackgroundColourBottom([16, 74, 133]);
  }, [setPageName]);
  return (
    <div style={{ height: "400vh", overflow: "hidden" }}>
      <FrostGlassBox divStyle={{ top: "50%", left: "50%" }}>
        <h1>testing 123 this is about page</h1>
      </FrostGlassBox>
    </div>
  );
}

export default About;
