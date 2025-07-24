"use client";

import { Comment } from "@/app/_components/comments";
import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

export const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  return (
    <>
      {comments?.data.map((comment) => (
        <Comment
          key={`key-comment ${comment.id}`}
          {...comment}
          variant="info"
        />
      ))}
    </>
  );
};
