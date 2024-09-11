import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import FrostGlassBox from "./FrostGlassBox";
import TextButton from "./TextButton";

interface Props {
  headerText: string;
}

function Header({ headerText }: Props) {
  const navigate = useNavigate();

  const redirectToRoot = () => {
    navigate("/");
  };

  const redirectToAbout = () => {
    navigate("/about");
  };

  const redirectToProjects = () => {
    navigate("/projects");
  };

  const redirectToRobotics = () => {
    navigate("/sparkans");
  };

  const redirectToMech = () => {
    navigate("/mechatronics");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "6%",
        zIndex: 1,
      }}
    >
      <FrostGlassBox
        divStyle={{
          width: "100%",
          left: "0%",
          top: "0%",
          height: "100%",
          borderRadius: "0",
          padding: "0%",
        }}
      >
        <>
          <TextButton
            text={"Portfolio"}
            onClick={redirectToRoot}
            divStyle={{
              position: "absolute",
              width: "15%",
              height: "80%",
              left: "1%",
              top: "15%",
              boxShadow: "none",
            }}
            textStyle={{ fontSize: "29px" }}
          />
          <h1
            style={{
              textAlign: "center",
              marginTop: "0.6%",
              marginRight: "26%",
              pointerEvents: "none",
              fontSize: "26px",
            }}
          >
            {headerText}
          </h1>

          <TextButton
            text={"Contacts"}
            onClick={redirectToAbout}
            divStyle={{
              position: "absolute",
              width: "10%",
              height: "70%",
              left: "89%",
              top: "15%",
              boxShadow: "none",
            }}
            textStyle={{ fontSize: "150%" }}
          />

          <TextButton
            text={"Projects"}
            onClick={redirectToProjects}
            divStyle={{
              position: "absolute",
              width: "10%",
              height: "70%",
              left: "78%",
              top: "15%",
              boxShadow: "none",
            }}
            textStyle={{ fontSize: "150%" }}
          />

          <TextButton
            text={"First Robotics"}
            onClick={redirectToRobotics}
            divStyle={{
              position: "absolute",
              width: "13%",
              height: "70%",
              left: "64%",
              top: "15%",
              boxShadow: "none",
            }}
            textStyle={{ fontSize: "150%" }}
          />

          <TextButton
            text={"Mechatronics 35"}
            onClick={redirectToMech}
            divStyle={{
              position: "absolute",
              width: "14%",
              height: "70%",
              left: "48.5%",
              top: "15%",
              boxShadow: "none",
            }}
            textStyle={{ fontSize: "150%" }}
          />
        </>
      </FrostGlassBox>
    </div>
  );
}

export default Header;
