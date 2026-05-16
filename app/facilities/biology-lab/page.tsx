import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function BiologyLabPage() {
  return (
    <PageLayout title="Biology Lab" heroImage="/bio.jpg">
      <FacilityPageContent
        title="Biology Lab"
        intro={[
          `The <strong>Biology Lab at NSK High School</strong> is a well-equipped learning space designed to give students practical knowledge and hands-on experience in life sciences. It helps students understand biological concepts more effectively by allowing them to observe and perform experiments related to the study of living organisms.`,
          `Our biology laboratory encourages students to explore the fascinating world of life—from microscopic organisms to the complex systems of the human body—through practical learning and scientific investigation.`,
        ]}
        sections={[
          {
            heading: "Key Features",
            content: {
              type: "features",
              items: [
                {
                  label: "Well-Equipped Workstations",
                  description:
                    "Students have access to laboratory workstations equipped with microscopes, slides, petri dishes, and other essential biological tools that support practical learning.",
                },
                {
                  label: "Educational Models and Charts",
                  description:
                    "The lab includes models of cells, human organs, and anatomical structures along with charts and diagrams that help students better understand theoretical concepts taught in the classroom.",
                },
                {
                  label: "Hands-On Experiments",
                  description:
                    "Students regularly conduct experiments on topics such as plant structure, cell observation, environmental studies, and other biological processes, helping them connect theory with practical knowledge.",
                },
                {
                  label: "Safety and Discipline",
                  description:
                    "The biology laboratory follows proper safety guidelines to ensure a secure learning environment. Students are guided by teachers on safe handling of equipment and responsible laboratory practices.",
                },
              ],
            },
          },
          {
            heading: "Impact on Learning",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Biology Lab at NSK High School</strong> promotes active learning and scientific curiosity. By performing experiments and observations, students develop important skills such as critical thinking, observation, analysis, and problem-solving.`,
                `Practical exposure also helps students gain a deeper understanding of biological concepts, making their learning more meaningful and engaging.`,
              ],
            },
          },
          {
            heading: "Conclusion",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the Biology Lab serves as an important part of the learning process. It provides students with the opportunity to explore life sciences in a practical and interactive way, helping them build a strong foundation for higher education and future careers in science and research.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
