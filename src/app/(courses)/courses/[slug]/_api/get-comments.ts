import { readData } from "@/core/http-service";

import { useQuery } from "@tanstack/react-query";
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
    gcTime: 6 * 60 * 60 * 1000,
    staleTime: 5 * 60 * 60 * 1000,
    queryKey: ["courseComments"],
    queryFn: () => getComments({ params }),
  });

  return { data };
};
