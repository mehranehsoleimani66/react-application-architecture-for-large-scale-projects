import { ComponentBase } from "../types/component-base.type";

export type PriceProps = Omit<ComponentBase, "disabled" | "variant"> & {
  text?: string;
  price?: number;
};
