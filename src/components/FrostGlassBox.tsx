import { ReactNode } from "react";

interface Props {
  divStyle: React.CSSProperties;
  children?: ReactNode;
}

function FrostGlassBox({ divStyle, children }: Props) {
  const mergedDivStyle = { ...defaultDivStyle, ...divStyle };
  return (
    <>
      <div style={mergedDivStyle}>
        {children && <div style={{ opacity: 1 }}>{children}</div>}
      </div>
    </>
  );
}

const defaultDivStyle: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  position: "absolute",
  zIndex: -1,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37 )",
  backdropFilter: "blur(3px)",
  padding: "10px",
};

export default FrostGlassBox;
