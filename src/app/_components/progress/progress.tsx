import classNames from "classnames";

import { Size } from "@/app/types/size.type";
import { ProgressProps } from "./progress.types";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

export const Progress = ({
  variant = "neutral",
  className,
  size = "small",
  value,
}: ProgressProps) => {
  const classes = classNames("progress", className, {
    [`progress-${variant}`]: variant,
    [sizeClasses[size]]: true, // ✅ اینجا دیگه اروری نیست
  });

  return <progress value={value} max="100" className={classes} />;
};
