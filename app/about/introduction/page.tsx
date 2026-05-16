import PageLayout from "@/components/layout/PageLayout";
import InnerPageContent from "@/components/layout/InnerPageContent";

export default function IntroductionPage() {
  return (
    <PageLayout title="Introduction" heroImage="/intro.jpeg">
      <InnerPageContent
        heading="Introduction"
        paragraphs={[
          `<strong>Welcome to NSK High School</strong>, where education meets excellence and innovation. We are committed to nurturing young minds and preparing them for a successful and meaningful future. With a balanced focus on academics, creativity, and character development, our school provides a holistic learning environment for every student.`,
          `Our institution is guided by the vision of encouraging curiosity, building confidence, and developing a lifelong passion for learning. With modern facilities and a dedicated team of educators, <strong>NSK High School</strong> creates a supportive atmosphere where students can discover their strengths and achieve their highest potential.`,
          `Whether in academics, sports, or co-curricular activities, our students are encouraged to explore their talents and grow with confidence. At <strong>NSK High School</strong>, we believe in shaping responsible individuals who value integrity, respect, and perseverance.`,
          `We work together to create a vibrant community of learners who are prepared to make a positive difference in the world.`,
          `<strong>Welcome to NSK High School — a place where dreams grow and futures begin.</strong>`,
        ]}
        image={{
          src: "/intro.jpg",
          alt: "NSK High School staff group photo",
        }}
        
      />
    </PageLayout>
  );
}
