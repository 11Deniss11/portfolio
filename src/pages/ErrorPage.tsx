import { useEffect } from "react";
import FrostGlassBox from "../components/FrostGlassBox";

interface Props {
  setPageName: (pageName: string) => void;
  setBackgroundColourTop: (colour: number[]) => void;
  setBackgroundColourBottom: (colour: number[]) => void;
}

function ErrorPage({
  setPageName,
  setBackgroundColourBottom,
  setBackgroundColourTop,
}: Props) {
  useEffect(() => {
    setPageName("Page Not Found");
    setBackgroundColourTop([171, 189, 204]);
    setBackgroundColourBottom([16, 74, 133]);
  }, [setPageName]);
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <FrostGlassBox
        divStyle={{
          top: "30%",
          left: "25%",
          width: "50%",
          textAlign: "center",
          padding: "0%",
        }}
      >
        <h1>This Page does not exist</h1>
        <h1>Click Portfolio to return to home</h1>
      </FrostGlassBox>
    </div>
  );
}

export default ErrorPage;
