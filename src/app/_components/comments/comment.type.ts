import { Comments } from "@/app/types/comments.interface";
import { ComponentBase } from "@/app/types/component-base.type";

export type CommentProps = Omit<ComponentBase, "isDisabled" | "size"> &
  Comments;
