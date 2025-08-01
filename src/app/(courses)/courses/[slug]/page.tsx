import { Accordion } from "@/app/_components/accordion";
import { Tabs } from "@/app/_components/tabs";

import { accorrionType } from "@/app/types/accordion.types";
import { TabProps } from "@/app/types/tabs.types";
import { API_URL } from "@/configs/global";
import { CourseDetailsProps } from "../../../../app/types/course-detail.interface";
import { CourseAside } from "./_components/course-aside/course-aside";
import { CourseComments } from "./_components/course-comments/course-comments";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug: slug,
  }));
}

async function getCourse(slug: string): Promise<CourseDetailsProps> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}
export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const course = await getCourse(slug);

  const faqs: accorrionType[] = course.frequentlyAskedQuestions.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  const tabs: TabProps[] = [
    {
      label: "مشخصات دوره",
      content: course.description,
    },
    {
      label: "دیدگاه‌ها و پرسش",
      content: <CourseComments />,
    },
    {
      label: "سوالات متداول",
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs} />
      </div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  );
}
