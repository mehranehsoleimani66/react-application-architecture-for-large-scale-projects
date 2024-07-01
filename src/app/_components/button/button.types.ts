import { ButtonHTMLAttributes } from "react";
import { LoadingBehavior } from "../types/Loading-behavior.type";
import { ComponentBase } from "../types/component-base.type";
export type ButtonShape = "default" | "wide" | "full" | "square";
export type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  LoadingBehavior &
  ComponentBase & {
    isOutlined?: false;
    isLink?: false;
    shape?: ButtonShape;
    animatedIcon?: boolean;
  };
