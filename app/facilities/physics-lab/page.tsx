import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function PhysicsLabPage() {
  return (
    <PageLayout title="Physics Lab" heroImage="/chair.webp">
      <FacilityPageContent
        title="Physics Lab"
        intro={[
          `The <strong>Physics Lab at NSK High School</strong> is a modern and interactive learning space where students explore the fundamental principles of physics through practical experiments and real-world applications. The laboratory encourages curiosity and helps students understand how physical laws work in everyday life.`,
          `By combining theory with hands-on activities, the physics lab allows students to observe, experiment, and discover scientific concepts in a clear and engaging way.`,
        ]}
        sections={[
          {
            heading: "Modern Laboratory Equipment",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Physics Lab at NSK High School</strong> is equipped with essential laboratory instruments and apparatus such as electrical circuits, measuring devices, thermometers, optical instruments, and other experimental tools. These resources help students perform experiments and understand various scientific principles effectively.`,
              ],
            },
          },
          {
            heading: "Interactive Learning Experience",
            content: {
              type: "paragraphs",
              items: [
                `Students perform practical experiments that demonstrate important physics concepts such as motion, energy, electricity, magnetism, light, and sound. Through experiments, models, and demonstrations, students gain a better understanding of how these principles apply to real-life situations.`,
              ],
            },
          },
          {
            heading: "Safe and Supervised Environment",
            content: {
              type: "paragraphs",
              items: [
                `Safety is an important priority in the physics laboratory. Students are guided by teachers to follow proper laboratory rules and safety procedures while performing experiments. This ensures that learning takes place in a secure and controlled environment.`,
              ],
            },
          },
          {
            heading: "Project-Based Learning",
            content: {
              type: "paragraphs",
              items: [
                `The lab encourages students to participate in project-based learning where they design simple experiments and explore scientific ideas independently. This approach helps develop creativity, analytical thinking, and problem-solving skills.`,
              ],
            },
          },
          {
            heading: "Conclusion",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Physics Lab at NSK High School</strong> is more than just a laboratory—it is a place where scientific theories become real through experimentation and discovery. It helps students develop a strong foundation in physics while inspiring them to explore the wonders of science and technology.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
