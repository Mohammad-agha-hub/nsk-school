import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function LibraryPage() {
  return (
    <PageLayout title="Library" heroImage="/library.jpg">
      <FacilityPageContent
        title="Library at NSK High School"
        intro={[
          `At <strong>NSK High School</strong>, the library plays a vital role in supporting both academic success and personal growth. It is more than just a place filled with books—it is a dynamic learning space designed to inspire curiosity, encourage independent thinking, and promote a lifelong love for reading.`,
        ]}
        sections={[
          {
            heading: "A Wide Range of Resources",
            content: {
              type: "paragraphs",
              items: [
                `The library at <strong>NSK High School</strong> offers a diverse collection of books, reference materials, journals, and educational resources to meet the needs of students across different grade levels. From academic textbooks and research materials to fiction and non-fiction books, the library provides students with valuable resources that support their studies while also expanding their knowledge beyond the classroom.`,
              ],
            },
          },
          {
            heading: "A Comfortable and Interactive Learning Space",
            content: {
              type: "paragraphs",
              items: [
                `The library is designed to create a calm and engaging environment where students can read, study, and explore new ideas. Comfortable seating arrangements and quiet reading areas allow students to focus on their studies. The space also encourages group discussions and collaborative learning, helping students interact with each other and share knowledge.`,
              ],
            },
          },
          {
            heading: "Integration of Modern Learning Tools",
            content: {
              type: "paragraphs",
              items: [
                `To support modern learning methods, the <strong>NSK High School</strong> library integrates digital resources along with traditional books. Educational materials and digital learning tools help students access information easily and improve their research and learning skills.`,
              ],
            },
          },
          {
            heading: "Promoting a Reading Culture",
            content: {
              type: "paragraphs",
              items: [
                `One of the main goals of the library is to develop a strong reading habit among students. Through reading activities, book displays, and storytelling sessions, students are encouraged to explore new books and topics. Teachers and library staff guide students in selecting books that match their interests and academic needs.`,
              ],
            },
          },
          {
            heading: "A Space for Personal Growth",
            content: {
              type: "paragraphs",
              items: [
                `Beyond academics, the library also supports the personal development of students. Books related to life skills, leadership, motivation, and self-improvement help students develop confidence, creativity, and a broader perspective about the world.`,
              ],
            },
          },
          {
            heading: "Conclusion",
            content: {
              type: "paragraphs",
              items: [
                `The library at <strong>NSK High School</strong> is more than just a reading space—it is a center for learning, creativity, and intellectual growth. It encourages students to explore new ideas, develop critical thinking skills, and build a strong foundation for lifelong learning. Through its resources and supportive environment, the library helps students grow academically and personally.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
