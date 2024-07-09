import { Badge } from "../badge";
import { IconToman } from "../icons/icons";
import { Size } from "../types/size.type";
import { PriceProps } from "./price.type";
const SizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
  tiny: { textSize: "text-md", svgSize: 16 },
  small: { textSize: "text-xl", svgSize: 18 },
  normal: { textSize: "text-2xl", svgSize: 20 },
  large: { textSize: "text-3xl", svgSize: 22 },
};

export const Price: React.FC<PriceProps> = ({
  text = "رایگان",
  price,
  size = "normal",
  className,
}) => {
  return (
    <>
      {/* price is neither null nor undefined by using != */}
      {price != null && price > 0 ? (
        <span
          // if u want to access the value of each key in an object u can simply write {SizeClasses[size].textSize}
          className={`gap-1 font-bold flex items-center dark:text-white/90 ${SizeClasses[size].textSize} ${className}`}
        >
          {price.toLocaleString()}
          <IconToman
            strokeWidth={1}
            width={SizeClasses[size].svgSize}
            height={SizeClasses[size].svgSize}
            viewBox="0 0 16 16"
          />
        </span>
      ) : (
        <Badge variant="success" size="small">
          {text}
        </Badge>
      )}
    </>
  );
};
