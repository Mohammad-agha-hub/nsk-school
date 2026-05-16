import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function SmartClassPage() {
  return (
    <PageLayout title="Smart Class" heroImage="/smart.jpg">
      <FacilityPageContent
        title="Smart Class"
        intro={[
          `At <strong>NSK High School</strong>, we are committed to providing students with modern and effective learning methods. Our <strong>Smart Class system</strong> is designed to create an engaging and interactive classroom environment where technology enhances the overall learning experience and helps students develop essential <strong>21st-century skills</strong>.`,
        ]}
        sections={[
          {
            heading: "Key Features of the Smart Class",
            content: {
              type: "features",
              items: [
                {
                  label: "Interactive Digital Lessons",
                  description:
                    "Using projectors, digital screens, and educational software, lessons become more engaging with visuals, animations, and interactive activities that help students understand concepts more clearly.",
                },
                {
                  label: "Real-Time Feedback",
                  description:
                    "Teachers can quickly evaluate students' understanding through interactive questions and exercises. This allows them to provide immediate clarification and personalized support when needed.",
                },
                {
                  label: "Engagement and Collaboration",
                  description:
                    "Smart Class technology encourages group participation and collaborative learning. Students can share ideas, discuss topics, and work together on digital learning activities.",
                },
                {
                  label: "Rich Multimedia Content",
                  description:
                    "Lessons include videos, presentations, simulations, and visual demonstrations that make subjects like science, mathematics, geography, and history easier to understand and more interesting for students.",
                },
                {
                  label: "Accessible Learning Resources",
                  description:
                    "Students gain access to additional learning materials and educational resources that support their studies and encourage independent learning.",
                },
                {
                  label: "Eco-Friendly Learning",
                  description:
                    "Smart Class technology reduces the need for excessive paper usage, supporting an environmentally friendly and modern approach to education.",
                },
              ],
            },
          },
          {
            heading: "Smart Learning at NSK High School",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, Smart Classes are not just about using technology—they are about creating a better and more engaging learning experience. By combining innovative teaching methods with modern digital tools, we encourage students to think critically, explore creatively, and participate actively in the learning process.`,
                `Our goal is to make education <strong>interactive, effective, and enjoyable</strong>, helping every student understand concepts better and build a strong foundation for future success.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
