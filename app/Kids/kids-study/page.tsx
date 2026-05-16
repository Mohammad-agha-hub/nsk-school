import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function KidsStudyPage() {
  return (
    <PageLayout title="Kids Study" heroImage="/study.jpg">
      <FacilityPageContent
        title="Kids Study"
        showSidebar={false}
        intro={[
          `The <strong>Kids Study Program at NSK High School</strong> is designed to provide a dynamic and engaging learning environment that supports both academic growth and personal development in young students. The program focuses on building strong foundational skills while encouraging curiosity, creativity, and confidence in every child.`,
        ]}
        sections={[
          {
            heading: "Strong Academic Foundation",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Kids Study Program at NSK High School</strong> helps students develop essential skills in core subjects such as mathematics, science, and language. Through structured lessons and interactive activities, students gain a clear understanding of basic concepts that form the foundation for future learning.`,
              ],
            },
          },
          {
            heading: "Encouraging Creativity and Critical Thinking",
            content: {
              type: "paragraphs",
              items: [
                `In addition to academic learning, the program encourages students to think creatively and develop problem-solving abilities. Activities such as group discussions, creative projects, and practical exercises help students express their ideas and improve their critical thinking skills.`,
              ],
            },
          },
          {
            heading: "Collaborative Learning",
            content: {
              type: "paragraphs",
              items: [
                `Students are encouraged to work together through teamwork-based activities and group learning sessions. This helps them develop communication skills, cooperation, and confidence while learning to respect different perspectives.`,
              ],
            },
          },
          {
            heading: "Modern Teaching Methods",
            content: {
              type: "paragraphs",
              items: [
                `The program is guided by experienced and dedicated teachers who use modern and interactive teaching methods to make learning enjoyable and effective. By combining traditional teaching with engaging activities, students remain motivated and interested in their studies.`,
              ],
            },
          },
          {
            heading: "Preparing Students for Future Success",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the Kids Study Program aims to prepare students for future academic success by developing strong learning habits, curiosity, and confidence. The program ensures that every child receives the support and guidance needed to grow academically and personally.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
