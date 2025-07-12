import { CourseSummary } from "@/app/_components/types/course-summary.interface";
import { API_URL } from "@/configs/global";
import { CourseCard } from "./course-card";

export type CardCourseListProps = {
  courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });

  // Introduce a 5-second delay after the fetch call
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return res.json();
}

export const CourseCardList: React.FC<CardCourseListProps> = async () => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
