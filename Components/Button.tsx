import React, { ReactNode } from "react";
interface Props {
  text: string;
  icon?: ReactNode,
  padding?: number;
  px?: number;
  py?: number;
  radius?: number;
  bgColor?: string;
  textColor?: string;
  textSize?: number;
  textWight?: number | string; 
}

const Button: React.FC<Props> = ({
  text,
  icon,
  padding,
  px,
  py,
  radius,
  bgColor,
  textColor,
  textSize,
  textWight,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: padding,
        paddingInline: px,
        paddingTop:py,
        paddingBottom: py,
        borderRadius: radius,
        background: bgColor,
        color: textColor,
        width: 'fit-content',
      }}
    >
      <div style={{fontSize: textSize, fontWeight: textWight}}>{text}</div>
      {icon}
    </div>
  );
};

export default Button;
