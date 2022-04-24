import { useMemo } from "react";
import { FiPlus, FiMinus, FiX, FiCheck } from "react-icons/fi";

interface Props {
  disabled?: boolean;
  variant?: "outline" | "filled";
  name: "plus" | "minus" | "cross" | "check";
  size?: number;
  gap?: number;
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
    gap = 2,
    fill = "orangered",
    stroke = "currentColor",
    strokeWidth = 2,
    disabledOpacity = 0.5,
    disabledStroke = "#888"
  } = props;

  const isVariant = variant !== undefined;
  const isFilled = isVariant && variant === "filled";
  const finalSize = size - gap;
  const finalOpacity = disabled ? disabledOpacity : 1;
  const disabledOffset = 6;
  const disabledStrokeWidth = strokeWidth * 0.9;
  const disabledStrokeOpacity = 0.9;
  const finalViewBox = useMemo(() => {
    return `0 ${name === "check" ? -2 : 0} ${size} ${size}`;
  }, [size, name]);

  const styles = useMemo(() => {
    return {
      svg: {
        outline: isVariant
          ? `${strokeWidth + 1}px solid ${isFilled ? fill : stroke}`
          : "transparent",
        outlineOffset: "-0.5px",
        borderRadius: "50%",
        aspectRatio: "1",
        backgroundColor: isFilled ? fill : "transparent",
        stroke,
        strokeWidth,
        opacity: finalOpacity
      }
    };
  }, [isVariant, strokeWidth, isFilled, fill, stroke, finalOpacity]);

  return (
    <svg
      style={styles.svg}
      width={size}
      height={size}
      viewBox={finalViewBox}
      focusable="false"
    >
      {
        {
          plus: (
            <FiPlus
              size={size}
              opacity={finalOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ),
          minus: (
            <FiMinus
              size={size}
              opacity={finalOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ),
          cross: (
            <FiX
              size={size}
              opacity={finalOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ),
          check: (
            <FiCheck
              size={size}
              opacity={finalOpacity}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          )
        }[name]
      }
      {disabled && (
        <g>
          <line
            x1={gap}
            x2={finalSize}
            y1={finalSize - disabledOffset}
            y2={gap - disabledOffset}
            strokeWidth={disabledStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={disabledStroke}
            opacity={disabledStrokeOpacity}
          />
          <line
            x1={gap}
            x2={finalSize}
            y1={finalSize + disabledOffset}
            y2={gap + disabledOffset}
            strokeWidth={disabledStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={disabledStroke}
            opacity={disabledStrokeOpacity}
          />

          <line
            x1={gap}
            y1={finalSize}
            x2={finalSize}
            y2={gap}
            strokeWidth={disabledStroke}
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
