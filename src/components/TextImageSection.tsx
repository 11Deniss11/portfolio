import { ReactNode } from "react";
import FrostGlassBox from "../components/FrostGlassBox";

interface Props {
    collectiveDivStyle?: React.CSSProperties;
    textDivStyle?: React.CSSProperties;
    imgDivStyle?: React.CSSProperties;
    image?: string;
    textOrrientation: "left" | "right";
    children?: ReactNode;
}

function TextImageSection({ collectiveDivStyle, textDivStyle, imgDivStyle, image, textOrrientation, children }: Props) {
  const defaultTextDivStyle = textOrrientation === "right" ? defaultTextDivStyleR : defaultTextDivStyleL;
  const defaultImgDivStyle = textOrrientation === "right" ? defaultImgDivStyleR : defaultImgDivStyleL;

  const mergedTextDivStyle = { ...defaultTextDivStyle, ...textDivStyle, ...collectiveDivStyle };
  const mergedImgDivStyle = { ...defaultImgDivStyle, ...imgDivStyle, ...collectiveDivStyle };
  return (
    <>
      {textOrrientation === "right" ? (
        <>
          <FrostGlassBox
            divStyle={mergedImgDivStyle}
          >
            {image && (
              <img src={image} alt="image"
                style={{
                  marginLeft: "3%",
                  marginTop: "3.2%",
                  width: "90%",
                  objectFit: "cover",
              }} />
            )}
          </FrostGlassBox>
          <FrostGlassBox
            divStyle={mergedTextDivStyle}
          >
            {children}
          </FrostGlassBox>
        </>
      ) : (
        <>
          <FrostGlassBox
            divStyle={mergedTextDivStyle}
          >
            {children}
          </FrostGlassBox>
          <FrostGlassBox
            divStyle={mergedImgDivStyle}
          >
            {image && (
              <img src={image} alt="image"
                style={{
                  marginLeft: "3%",
                  marginTop: "3.2%",
                  width: "90%",
                  objectFit: "cover",
              }} />
            )}
          </FrostGlassBox>
        </>
      )}
    </>
  ) 
}

const defaultTextDivStyleR: React.CSSProperties = {
  right: "5%",
  left: "38vw",
  height: "50%",
  paddingLeft: "2%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const defaultImgDivStyleR: React.CSSProperties = {
  left: "5%",
  height: "50%",
  width: "29vw",
  paddingLeft: "2%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const defaultTextDivStyleL: React.CSSProperties = {
  left: "5%",
  right: "38vw",
  height: "50%",
  paddingLeft: "2%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const defaultImgDivStyleL: React.CSSProperties = {
  right: "5%",
  height: "50%",
  width: "29vw",
  paddingLeft: "2%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

export default TextImageSection;