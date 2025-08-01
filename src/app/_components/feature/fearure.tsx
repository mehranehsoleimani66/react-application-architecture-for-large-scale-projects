import Image from "next/image";
import { FeatureProps } from "./feature.types";

export const Feature: React.FC<FeatureProps> = ({
  feature: { title, description, icon },
}) => {
  return (
    <article className="flex-1 flex flex-col items-center lg:items-start gap-4">
      <Image src={icon} width={52} height={52} alt="" />
      <h4 className="text-lg font-bold ">{title}</h4>
      <p className="max-w-md text-lg text-center lg:text-right">
        {description}
      </p>
    </article>
  );
};
