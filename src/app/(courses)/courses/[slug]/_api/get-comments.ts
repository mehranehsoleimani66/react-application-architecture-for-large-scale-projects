import { readData } from "@/core/http-service";
import { useQuery } from "react-query";
import { CourseCommentList } from "../_types/comment-coure-interface";

type GetCommentsOptions = {
  params: { slug: string; page: number };
};
const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
  const { data } = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => getComments({ params }),
  });

  return { data };
};
