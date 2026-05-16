import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function SafetySecurityPage() {
  return (
    <PageLayout title="Safety & Security" heroImage="/survillence.jpg">
      <FacilityPageContent
        title="Safe and Security"
        showSidebar={false}
        intro={[
          `At <strong>NSK High School</strong>, the safety and security of students, staff, and visitors are given the highest priority. The school maintains a secure and well-managed campus environment to ensure that every student can learn and grow with confidence and peace of mind.`,
        ]}
        sections={[
          {
            heading: "Modern Security Measures",
            content: {
              type: "paragraphs",
              items: [
                `The school campus is equipped with <strong>CCTV surveillance systems</strong> that monitor important areas of the campus to maintain safety and prevent unauthorized activities. Secure entry and exit points are also maintained to ensure controlled access to the school premises.`,
              ],
            },
          },
          {
            heading: "Trained Staff and Supervision",
            content: {
              type: "paragraphs",
              items: [
                `Dedicated school staff and security personnel help monitor daily activities on campus. Their presence ensures that students remain safe and that any concerns can be addressed promptly.`,
              ],
            },
          },
          {
            heading: "Emergency Preparedness",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, proper safety procedures and emergency response plans are in place. Fire safety equipment and basic emergency guidelines are maintained to ensure the well-being of everyone on campus.`,
              ],
            },
          },
          {
            heading: "Visitor Management",
            content: {
              type: "paragraphs",
              items: [
                `The school follows a responsible visitor management system to ensure that only authorized individuals are allowed inside the campus. This helps maintain a secure and protected environment for students.`,
              ],
            },
          },
          {
            heading: "A Safe and Supportive Environment",
            content: {
              type: "paragraphs",
              items: [
                `Beyond physical safety, <strong>NSK High School</strong> promotes a caring and respectful atmosphere where students feel protected, supported, and valued. The school is committed to maintaining a safe learning environment that encourages both academic success and personal growth.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
