import { ButtonHTMLAttributes } from "react";
import { LoadingBehavior } from "../types/Loading-behavior.type";
import { ComponentBase } from "../types/component-base.type";

export type ButtonShape = "default" | "wide" | "full" | "square";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    shape?: ButtonShape;
    isLink?: boolean;
    animatedIcon?: boolean;
  };

//const name:string="ali"
// const family:ButtonShape ="default"
