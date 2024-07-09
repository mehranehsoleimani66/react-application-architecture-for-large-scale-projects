import { CourseSummary } from "@/app/_components/types/course-summary.interface";
import { CourseCard } from "./course-card";

export type CardCourseListProps = {
  courses: CourseSummary[];
};
export const CourseCardList: React.FC<CardCourseListProps> = async ({
  courses,
}) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
