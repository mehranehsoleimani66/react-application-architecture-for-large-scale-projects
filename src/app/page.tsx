import HeroSection from "./_components/home-hero-section";
import { CourseSummary } from "./_components/types/course-summary.interface";

// async function getNewestCourses(count: number): Promise<CourseSummary[]> {
async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HeroSection />
      {newestCourses.map((p) => (
        <p key={p.title}>{p.title}</p>
      ))}
    </>
  );
}
