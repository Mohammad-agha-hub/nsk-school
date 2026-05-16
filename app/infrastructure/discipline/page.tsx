import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function DisciplinePage() {
  return (
    <PageLayout title="Discipline" heroImage="/img-7.jpg">
      <FacilityPageContent
        title="Discipline"
        showSidebar={false}
        intro={[
          `At <strong>NSK High School</strong>, discipline is considered an essential part of a student's overall development. The school focuses on creating a respectful, responsible, and positive environment where students can learn and grow with confidence.`,
          `Students are encouraged to practice <strong>self-control, punctuality, and good behavior</strong> both inside and outside the classroom. Maintaining discipline helps create a peaceful learning atmosphere where everyone can focus on education and personal growth.`,
        ]}
        sections={[
          {
            heading: "Encouraging Responsibility",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, students are guided to understand the importance of taking responsibility for their actions. Clear rules and expectations are established so that students know how to behave respectfully toward teachers, classmates, and school staff.`,
              ],
            },
          },
          {
            heading: "Positive Behaviour and Values",
            content: {
              type: "paragraphs",
              items: [
                `The school promotes positive behavior by encouraging values such as honesty, respect, cooperation, and kindness. Students are appreciated and rewarded for maintaining good conduct and setting a positive example for others.`,
              ],
            },
          },
          {
            heading: "Fair and Balanced Approach",
            content: {
              type: "paragraphs",
              items: [
                `NSK High School follows a structured and fair approach to discipline. While good behavior is recognized and appreciated, inappropriate behavior is addressed with suitable guidance and corrective measures. This approach helps students learn from their mistakes and grow into responsible individuals.`,
              ],
            },
          },
          {
            heading: "Building Strong Character",
            content: {
              type: "paragraphs",
              items: [
                `Through consistent guidance and support, <strong>NSK High School</strong> aims to develop students who are disciplined, respectful, and confident. The focus on discipline helps students build strong character and prepares them to become responsible citizens in the future.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
