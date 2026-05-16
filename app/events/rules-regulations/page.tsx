import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function RulesAndRegulationsPage() {
  return (
    <PageLayout title="Rules And Regulations" heroImage="/rule.jpg">
      <FacilityPageContent
        title="Rules and Regulations"
        intro={[
          `At <strong>NSK High School</strong>, rules and regulations are designed to maintain a safe, disciplined, and positive learning environment for all students. Following these guidelines helps students develop responsibility, respect, and good habits that support their academic and personal growth.`,
        ]}
        sections={[
          {
            heading: "School Discipline",
            content: {
              type: "paragraphs",
              items: [
                `Students are expected to maintain discipline at all times within the school campus. Respectful behavior towards teachers, staff, and fellow students is essential. Any form of bullying, misbehavior, or disrespectful conduct is strictly prohibited.`,
              ],
            },
          },
          {
            heading: "Punctuality and Attendance",
            content: {
              type: "paragraphs",
              items: [
                `Students should arrive at school on time and attend all classes regularly. Regular attendance is important for effective learning and participation in school activities.`,
              ],
            },
          },
          {
            heading: "School Uniform",
            content: {
              type: "paragraphs",
              items: [
                `All students must wear the prescribed <strong>school uniform</strong> neatly and properly during school hours and while attending school events. The uniform reflects discipline and unity among students.`,
              ],
            },
          },
          {
            heading: "Respect for School Property",
            content: {
              type: "paragraphs",
              items: [
                `Students must take care of school property including classrooms, laboratories, library materials, playground equipment, and other facilities. Any damage to school property may lead to disciplinary action.`,
              ],
            },
          },
          {
            heading: "Classroom Conduct",
            content: {
              type: "paragraphs",
              items: [
                `Students are expected to maintain silence and attentiveness during classes. They should follow the instructions given by teachers and actively participate in classroom activities.`,
              ],
            },
          },
          {
            heading: "Safety and Responsibility",
            content: {
              type: "paragraphs",
              items: [
                `Students must follow all safety rules within the school campus, laboratories, playground, and transport facilities. They should behave responsibly to ensure their own safety and the safety of others.`,
              ],
            },
          },
          {
            heading: "Participation in Activities",
            content: {
              type: "paragraphs",
              items: [
                `Students are encouraged to participate in academic, cultural, and sports activities organized by the school. These activities help develop confidence, teamwork, and leadership skills.`,
              ],
            },
          },
          {
            heading: "Cooperation with School Authorities",
            content: {
              type: "paragraphs",
              items: [
                `Students and parents are expected to cooperate with the school administration and teachers to maintain a positive educational environment.`,
                `At <strong>NSK High School</strong>, these rules and regulations help create a disciplined and supportive atmosphere where students can focus on learning and personal development.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
