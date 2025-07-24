import { Comments } from "@/app/types/comments.interface";

export type CourseCommentList = {
  data: Comments[];
  nextPage: number;
};
