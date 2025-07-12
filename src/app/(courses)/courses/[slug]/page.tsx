// import { CourseDetails } from "@/app/_components/types/course-detail.interface";
// import { API_URL } from "@/configs/global";

// export async function generateStaticParams() {
//   const slugs = await fetch(`${API_URL}/courses/slugs}`).then((res) =>
//     res.json()
//   );
//   return (slugs as string[]).map((slug) => ({
//     slug: slug,
//   }));
// }

// export async function getCourse(slug: string): Promise<CourseDetails> {
//   const res = await fetch(`${API_URL}/courses/${slug}`);
//   return res.json();
// }

// export default async function CourseDetail({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;
//   const courseData = await getCourse(slug);
//   console.log("lllllllllll", courseData);
//   return <div>{courseData.title}</div>;
// }

import { CourseDetails } from "@/app/_components/types/course-detail.interface";
import { API_URL } from "@/configs/global";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug: slug,
  }));
}
export async function getCourse(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}
export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const courseData = await getCourse(slug);
  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{courseData.title}</h1>
    </div>
  );
}
