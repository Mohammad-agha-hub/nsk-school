import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function MorningAssemblyPage() {
  return (
    <PageLayout title="Morning Assembly" heroImage="/img-5.jpg">
      <FacilityPageContent
        title="Morning Assembly"
        showSidebar={false}
        intro={[
          `The <strong>Morning Assembly at NSK High School</strong> is an important and meaningful start to the school day. It brings students and teachers together to begin the day with positivity, discipline, and a sense of unity.`,
          `Every morning, students gather in the school assembly area under the guidance of teachers and the school principal. The assembly usually begins with a short prayer that encourages peace, focus, and a positive mindset for the day ahead.`,
        ]}
        sections={[
          {
            heading: "Activities During the Assembly",
            intro:
              "The morning assembly includes several activities that help students stay informed and motivated:",
            content: {
              type: "features",
              items: [
                {
                  label: "Thought for the Day",
                  description:
                    "Students share inspiring thoughts or messages that promote positive values.",
                },
                {
                  label: "School Announcements",
                  description:
                    "Important information about upcoming events, competitions, and school activities is shared.",
                },
                {
                  label: "Student Presentations",
                  description:
                    "Students may present short speeches, songs, dances, or skits that showcase their talents and creativity.",
                },
                {
                  label: "Achievements and Recognition",
                  description:
                    "Outstanding student achievements in academics, sports, or other activities are appreciated.",
                },
              ],
            },
          },
          {
            heading: "Building Discipline and Unity",
            content: {
              type: "paragraphs",
              items: [
                `The assembly concludes with the <strong>National Anthem</strong>, encouraging a sense of pride, unity, and respect among students. It helps develop discipline, confidence, and communication skills while strengthening the school community.`,
                `At <strong>NSK High School</strong>, the Morning Assembly plays a valuable role in motivating students, building character, and creating a positive atmosphere for a productive day of learning.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
