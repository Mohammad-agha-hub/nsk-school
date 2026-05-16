import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function FireSafetyPage() {
  return (
    <PageLayout title="Fire Safety" heroImage="/survillence.jpg">
      <FacilityPageContent
        title="Fire Safety"
        showSidebar={false}
        intro={[
          `At <strong>NSK High School</strong>, fire safety is taken very seriously to ensure the protection and well-being of students, staff, and visitors. The school has implemented several safety measures and systems to prevent fire hazards and respond effectively in case of emergencies.`,
        ]}
        sections={[
          {
            heading: "Fire Safety Equipment",
            content: {
              type: "paragraphs",
              items: [
                `The campus is equipped with essential <strong>fire safety equipment</strong>, including fire extinguishers, smoke detectors, and fire alarms. These devices are placed at strategic locations throughout the school to allow quick detection and immediate action if needed.`,
              ],
            },
          },
          {
            heading: "Regular Fire Drills",
            content: {
              type: "paragraphs",
              items: [
                `To ensure preparedness, the school conducts <strong>regular fire drills</strong>. These drills help students and staff understand proper evacuation procedures and teach them how to remain calm and act responsibly during an emergency situation.`,
              ],
            },
          },
          {
            heading: "Clearly Marked Emergency Exits",
            content: {
              type: "paragraphs",
              items: [
                `All areas of the school have <strong>clearly marked emergency exits and evacuation routes</strong>. Fire escape plans are displayed in classrooms, corridors, and common areas so that everyone knows the safest way to exit the building if required.`,
              ],
            },
          },
          {
            heading: "Safety Training and Awareness",
            content: {
              type: "paragraphs",
              items: [
                `Teachers and staff are trained in basic fire safety measures and emergency response procedures. Students are also educated about safety practices so they understand how to react responsibly during emergencies.`,
              ],
            },
          },
          {
            heading: "Collaboration with Fire Authorities",
            content: {
              type: "paragraphs",
              items: [
                `<strong>NSK High School</strong> works closely with local fire departments for safety inspections and awareness programs. This collaboration helps ensure that the school maintains the highest standards of fire safety.`,
                `Through these measures, <strong>NSK High School</strong> maintains a secure and well-prepared environment where students can learn and grow with confidence and safety.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
