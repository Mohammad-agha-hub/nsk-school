import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function KidsClassPage() {
  return (
    <PageLayout title="Kids Class" heroImage="/img-8.jpg">
      <FacilityPageContent
        title="Kids Class"
        showSidebar={false}
        intro={[
          `The <strong>Kids Class at NSK High School</strong> is designed to create a warm, caring, and engaging learning environment for young learners. Our goal is to help children develop curiosity, creativity, and confidence during their early learning years.`,
          `The curriculum focuses on making learning fun and interactive through a variety of activities, including storytelling, games, art, and hands-on learning experiences. These activities help children explore new ideas while developing important early academic and social skills.`,
        ]}
        sections={[
          {
            heading: "A Fun and Interactive Learning Environment",
            content: {
              type: "paragraphs",
              items: [
                `In the <strong>Kids Class at NSK High School</strong>, learning is combined with play to make the classroom enjoyable and engaging. Through creative activities, group games, and interactive lessons, children develop communication skills, teamwork, and problem-solving abilities.`,
              ],
            },
          },
          {
            heading: "Focus on Holistic Development",
            content: {
              type: "paragraphs",
              items: [
                `The program not only supports early academic learning but also focuses on emotional and social growth. Children learn important values such as sharing, cooperation, and respect while building friendships with their classmates.`,
              ],
            },
          },
          {
            heading: "Caring and Dedicated Teachers",
            content: {
              type: "paragraphs",
              items: [
                `Our experienced and caring teachers guide every child according to their individual learning needs. They create a supportive atmosphere that encourages children to express themselves, ask questions, and explore their interests with confidence.`,
              ],
            },
          },
          {
            heading: "Building a Strong Foundation",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the Kids Class helps young learners build a strong foundation for future education. By combining fun activities with meaningful learning experiences, we inspire children to develop a lifelong love for learning while growing into confident and independent individuals.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
