import { useMemo } from "react";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";

interface Props {
  disabled?: boolean;
  variant?: "outline" | "filled";
  name: "plus" | "minus" | "cross";
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

  const styles = useMemo(() => {
    return {
      svg: {
        verticalAlign: "middle",
        overflow: disabled ? "auto" : "hidden",
        outline: isVariant
          ? `${strokeWidth + 1}px solid ${isFilled ? fill : stroke}`
          : "transparent",
        borderRadius: "50%",
        aspectRatio: "1",
        backgroundColor: isFilled ? fill : "transparent",
        stroke,
        strokeWidth,
        opacity: finalOpacity
      }
    };
  }, [disabled, isVariant, strokeWidth, isFilled, fill, stroke, finalOpacity]);

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
