"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

export const CourseComments = () => {
  const { slug } = useParams();

  const { data: comments } = useCourseComments({
    params: { slug: slug as string, page: 1 },
  });
  console.log("++++++++++++++++++++", comments);
  return <>{comments?.data.map((comment) => <p>{comment.commentText}</p>)}</>;
};
