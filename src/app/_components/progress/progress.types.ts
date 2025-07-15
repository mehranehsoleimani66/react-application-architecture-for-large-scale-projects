import { ComponentBase } from "@/app/types/component-base.type";

export type ProgressProps = Omit<ComponentBase, "isDisabled"> & {
  value: number;
};
