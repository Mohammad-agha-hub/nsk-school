import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function ComputerLabPage() {
  return (
    <PageLayout title="Computer Lab" heroImage="/computer.jpg">
      <FacilityPageContent
        title="Computer Lab"
        intro={[
          `The <strong>Computer Lab at NSK High School</strong> is an important center for digital learning, creativity, and technological development. It provides students with the opportunity to explore modern technology and develop essential computer skills that are necessary in today's digital world.`,
          `Equipped with modern systems and educational software, the computer lab supports interactive learning and helps students gain practical knowledge of technology while enhancing their academic experience.`,
        ]}
        sections={[
          {
            heading: "Key Features",
            content: {
              type: "features",
              items: [
                {
                  label: "Modern Computer Systems",
                  description:
                    "The computer lab is equipped with well-maintained computers and updated software that support various educational activities. Students can learn everything from basic computer operations to advanced digital tools.",
                },
                {
                  label: "Interactive Learning Environment",
                  description:
                    "The lab provides an engaging environment where students can learn through hands-on practice. Teachers guide students in using technology effectively for assignments, projects, and creative activities.",
                },
                {
                  label: "Support for Multiple Subjects",
                  description:
                    "The computer lab supports subjects such as computer science, mathematics, research projects, and digital learning activities. Students use computers to create presentations, complete assignments, and develop their digital literacy skills.",
                },
                {
                  label: "Access to Online Learning Resources",
                  description:
                    "Students can explore a variety of educational websites, online learning platforms, and research materials that help them expand their knowledge and improve their understanding of different subjects.",
                },
                {
                  label: "Technology-Based Activities",
                  description:
                    "The computer lab is also used for special learning programs such as coding practice, computer workshops, and technology-based extracurricular activities. These activities help students develop important problem-solving and analytical skills.",
                },
              ],
            },
          },
          {
            heading: "A Collaborative Learning Space",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Computer Lab at NSK High School</strong> also encourages teamwork and collaboration. Students can work together on projects, share ideas, and learn how to use technology responsibly and creatively. Teachers guide them in understanding how digital tools can be used effectively for learning and innovation.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
