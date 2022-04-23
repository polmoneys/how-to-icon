import React from "react";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";

interface Props {
  disabled?: boolean;
  variant?: "outline" | "filled";
  name: "plus" | "minus" | "cross";
  size?: number;
  fill?: string;
  stroke?: string;
  disabledStroke?: string;
  strokeWidth?: number;
  disabledOpacity?: number;
}

const Icon = (props: Props) => {
  const {
    name = "minus",
    disabled,
    variant,
    size = 42,
    fill = "orangered",
    stroke = "currentColor",
    strokeWidth = 2,
    disabledOpacity = 0.5,
    disabledStroke = "#888"
  } = props;

  const isVariant = variant !== undefined;
  const isFilled = isVariant && variant === "filled";
  const WHITESPACE = 4;
  const RATIO = size - WHITESPACE;
  const OPACITY = disabled ? disabledOpacity : 1;

  const styles = {
    svg: {
      verticalAlign: "middle",
      overflow: "hidden",
      outline: isVariant
        ? `${strokeWidth + 1}px solid ${isFilled ? fill : stroke}`
        : "transparent",
      borderRadius: "50%",
      aspectRatio: "1",
      backgroundColor: isFilled ? fill : "transparent",
      stroke,
      strokeWidth,
      opacity: OPACITY
    }
  };

  /*
  -webkit-text-stroke-color: currentColor;
*/
  return (
    <svg
      style={styles.svg}
      width={size}
      height={size}
      viewBox={`0 0  ${size} ${size}`}
      focusable="false"
    >
      {
        {
          plus: (
            <FiPlus
              size={size}
              opacity={OPACITY}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ),
          minus: (
            <FiMinus
              size={size}
              opacity={OPACITY}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ),
          cross: (
            <FiX
              size={size}
              opacity={OPACITY}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          )
        }[name]
      }
      {disabled && (
        <g>
          <line
            x1={WHITESPACE}
            y1={RATIO}
            x2={RATIO}
            y2={WHITESPACE}
            strokeWidth={strokeWidth * 4}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={disabledStroke}
          />
        </g>
      )}
    </svg>
  );
};

export default Icon;
