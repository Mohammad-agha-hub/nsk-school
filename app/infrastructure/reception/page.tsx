import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function OurReceptionPage() {
  return (
    <PageLayout title="Our Reception" heroImage="/survillence.jpg">
      <FacilityPageContent
        title="Reception"
        showSidebar={false}
        intro={[
          `The <strong>reception area at NSK High School</strong> is designed to create a welcoming and professional first impression for students, parents, and visitors. The space is clean, well-organized, and spacious, providing a comfortable environment for anyone entering the school.`,
          `Upon arrival, visitors are greeted by friendly and helpful staff who are always ready to assist with inquiries and provide guidance. The reception desk serves as the main point of contact for information about school programs, admissions, and general assistance.`,
          `The area includes comfortable seating for parents and guests, allowing them to wait conveniently while completing their visits. Informative displays and notice boards provide useful information about school activities, announcements, and achievements.`,
          `Large windows allow natural light to brighten the reception space, creating a pleasant and open atmosphere. The overall design reflects <strong>NSK High School's commitment to providing a warm, organized, and welcoming environment</strong> for everyone who visits the campus.`,
        ]}
        sections={[]}
      />
    </PageLayout>
  );
}
