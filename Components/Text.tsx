import React from "react";

interface Props {
  text: string;
  color?: string;
  lineH?: number;
  textSize?: number;
  textWeight?: number | string;
  padding?: number;
  maxW?: number;
  textDir?: 'right' | 'left';
}
function Text({
  text,
  color,
  lineH,
  textSize,
  textWeight,
  padding,
  maxW,
  textDir,
}: Props) {
  return (
    <div
      style={{
        color: color,
        lineHeight: lineH,
        fontSize: textSize,
        fontWeight: textWeight,
        padding: padding,
        maxWidth: maxW,
        textAlign: textDir
      }}
    >
      {text}
    </div>
  );
}

export default Text;
