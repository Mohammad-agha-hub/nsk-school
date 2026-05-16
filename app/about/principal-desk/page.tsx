import PageLayout from "@/components/layout/PageLayout";
import InnerPageContent from "@/components/layout/InnerPageContent";

export default function PrincipalsDeskPage() {
  return (
    <PageLayout title="Principal's Desk" heroImage="/chair.webp">
      <InnerPageContent
        heading="Director's Message"
        subheading="Mr. Ajit Singh"
        paragraphs={[
          `Welcome to <strong>NSK High School</strong>, a place where every child's unique potential is nurtured, encouraged, and celebrated. Our mission is to create a safe, inclusive, and inspiring learning environment that promotes creativity, critical thinking, and personal growth.`,
          `At <strong>NSK High School</strong>, we are committed to equipping our students with the knowledge, skills, and values they need not only to excel academically but also to become responsible, thoughtful, and compassionate individuals. We believe that education should prepare students for real-life challenges while helping them grow into confident and capable citizens.`,
          `Through innovative teaching methods, modern learning resources, and strong collaboration with parents and the wider community, we strive to provide every student with a meaningful and well-rounded educational experience. Along with academic excellence, we emphasise character development, leadership, and ethical values that help shape strong personalities.`,
          `I am extremely proud of the achievements of our students and the dedication shown by our talented teachers and staff. Together, we continue to nurture curiosity, inspire creativity, and encourage every learner to pursue excellence in all areas of life.`,
          `As we move forward, <strong>NSK High School</strong> remains committed to building a vibrant and supportive educational community where every student feels valued, motivated, and empowered to achieve their dreams.`,
        ]}
        signature={{
          name: "Mr. Ajit Singh",
          role: "Director",
          school: "NSK High School 🎓",
        }}
        image={{
          src: "/principal.jpeg",
          alt: "Mr. Ajit Singh — Director, NSK High School",
        }}
      />
    </PageLayout>
  );
}
