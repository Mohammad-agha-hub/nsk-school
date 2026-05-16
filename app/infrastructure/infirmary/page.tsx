import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function InfirmaryPage() {
  return (
    <PageLayout title="Infirmary" heroImage="/survillence.jpg">
      <FacilityPageContent
        title="Infirmary"
        showSidebar={false}
        intro={[
          `The <strong>Medical Room at NSK High School</strong> is a well-equipped and hygienic facility designed to take care of students' health and well-being. It provides immediate support in case of minor injuries, illnesses, or any health-related concerns during school hours.`,
        ]}
        sections={[
          {
            heading: "Well-Equipped Facility",
            content: {
              type: "paragraphs",
              items: [
                `The medical room is equipped with <strong>comfortable beds, essential medicines, and first-aid supplies</strong> to handle common health issues. The availability of proper medical equipment ensures that students receive quick and appropriate care when needed.`,
              ],
            },
          },
          {
            heading: "Trained Medical Support",
            content: {
              type: "paragraphs",
              items: [
                `The room is supervised by <strong>trained staff or healthcare professionals</strong> who monitor students' health and provide necessary first aid or basic medical assistance. They ensure that every student receives proper attention and care.`,
              ],
            },
          },
          {
            heading: "Easy Accessibility",
            content: {
              type: "paragraphs",
              items: [
                `Located at a <strong>convenient and easily accessible area</strong> within the school campus, the medical room allows students and staff to reach it quickly in case of emergencies.`,
              ],
            },
          },
          {
            heading: "Safe and Calm Environment",
            content: {
              type: "paragraphs",
              items: [
                `The medical room provides a <strong>clean, calm, and comfortable environment</strong> where students can rest and recover until they feel better or until further medical assistance is arranged if required.`,
                `At <strong>NSK High School</strong>, the medical room plays an important role in ensuring that students remain safe, healthy, and well cared for throughout the school day.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
