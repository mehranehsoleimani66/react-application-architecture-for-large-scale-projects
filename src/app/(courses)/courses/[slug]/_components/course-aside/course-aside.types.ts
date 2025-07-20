import { CourseDetailsProps } from "@/app/types/course-detail.interface";

export type CourseAsideProps = Pick<
  CourseDetailsProps,
  | "basePrice"
  | "numberOfLectures"
  | "numOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "authorName"
  | "authorSpecialty"
  | "profileImageId"
  | "levelNumber"
>;
