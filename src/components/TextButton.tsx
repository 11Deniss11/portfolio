import React, { useState } from "react";

interface Props {
  divStyle: React.CSSProperties;
  textStyle?: React.CSSProperties;
  text: string;
  onClick: () => void;
}

const defaultDivStyle: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  borderRadius: "10px",
  zIndex: 4,
  cursor: "pointer",
};

const defaultTextStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -110%)",
  pointerEvents: "none",
  zIndex: 3,
};

function TextButton({ text, onClick, divStyle, textStyle = {} }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
    onClick();
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mergedDivStyle = {
    ...defaultDivStyle,
    ...divStyle,
  };

  if (isClicked) {
    if (divStyle.boxShadow !== "none") {
      mergedDivStyle.boxShadow = "none";
    } else {
      mergedDivStyle.boxShadow = defaultDivStyle.boxShadow;
    }
  }

  if (isHovered) {
    mergedDivStyle.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.5 )";
  } else {
    mergedDivStyle.boxShadow = mergedDivStyle.boxShadow;
  }

  const mergedTextStyle = { ...defaultTextStyle, ...textStyle };

  return (
    <div
      style={mergedDivStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 style={mergedTextStyle}>{text}</h1>
    </div>
  );
}

export default TextButton;
