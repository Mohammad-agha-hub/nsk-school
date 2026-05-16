import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function KidsFunPage() {
  return (
    <PageLayout title="Kids Fun" heroImage="/chair.webp">
      <FacilityPageContent
        title="Kids Fun"
        showSidebar={false}
        intro={[
          `Kids Fun at <strong>NSK High School</strong> offers an exciting and enriching experience for young learners. With a wide range of engaging activities, including arts, sports, and interactive learning, children are encouraged to explore their creativity and develop their skills in a fun, supportive environment. The school's dedicated staff ensures that every child enjoys a balanced combination of educational and recreational opportunities. Through fun-filled programs, <strong>NSK High School</strong> nurtures well-rounded students who are motivated, confident, and ready for future challenges.`,
        ]}
        sections={[]}
      />
    </PageLayout>
  );
}
