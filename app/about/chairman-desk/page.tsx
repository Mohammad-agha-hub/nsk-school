import PageLayout from "@/components/layout/PageLayout";
import InnerPageContent from "@/components/layout/InnerPageContent";

export default function ChairmansDeskPage() {
  return (
    <PageLayout title="Chairman's Desk" heroImage="/chair.webp">
      <InnerPageContent
        heading="Principal"
        paragraphs={[
          `As the <strong>Principal of NSK High School</strong>, it gives me great pleasure to welcome you to our vibrant and inspiring learning community. Our school is dedicated to creating a nurturing environment where students can grow academically, socially, and personally.`,
          `At <strong>NSK High School</strong>, we strongly believe that education has the power to shape lives and build a brighter future. Our goal is not only to provide quality academic education but also to develop important life skills such as critical thinking, creativity, communication, and problem-solving. We aim to nurture confident individuals who are prepared to face the challenges of tomorrow.`,
          `Our dedicated teachers and staff work passionately to guide and support every student on their unique learning journey. Through innovative teaching methods and engaging classroom experiences, we ensure that students remain curious, motivated, and eager to learn.`,
          `We also believe that education is most effective when schools, parents, and the community work together. By maintaining strong partnerships with families, we strive to create a supportive environment where every child can achieve success and reach their full potential.`,
          `At <strong>NSK High School</strong>, we are committed to inspiring young minds, building strong values, and preparing students to become responsible and confident citizens.`,
        ]}
        signature={{
          name: "Principal",
          role: "NSK High School",
        }}
        image={{
          src: "/chairman.jpeg",
          alt: "NSK High School Principal",
        }}
      />
    </PageLayout>
  );
}
