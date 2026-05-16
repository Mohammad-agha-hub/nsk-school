import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function BuildingInfrastructurePage() {
  return (
    <PageLayout title="Building Infrastructure" heroImage="/chair.webp">
      <FacilityPageContent
        title="NSK High School – Modern Infrastructure for Quality Education"
        showSidebar={false}
        intro={[
          `<strong>NSK High School</strong> is designed to provide a dynamic and holistic learning environment for students. The school campus is equipped with modern facilities that support both academic excellence and overall personal development.`,
          `The classrooms at <strong>NSK High School</strong> are spacious, well-ventilated, and designed to create a comfortable and engaging learning atmosphere. Modern teaching aids and interactive learning tools help teachers deliver lessons effectively and make learning more interesting for students.`,
        ]}
        sections={[
          {
            heading: "Advanced Learning Facilities",
            content: {
              type: "paragraphs",
              items: [
                `The school provides well-equipped <strong>science laboratories and computer labs</strong>, allowing students to gain practical knowledge through experiments and hands-on activities. A well-maintained <strong>library</strong> with a wide collection of books and learning resources encourages students to develop reading habits and explore new ideas.`,
              ],
            },
          },
          {
            heading: "Sports and Physical Development",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, equal importance is given to physical fitness and sports activities. The school offers facilities such as a playground and space for outdoor and indoor games where students can participate in various sports activities. These facilities help students stay active and develop teamwork, discipline, and confidence.`,
              ],
            },
          },
          {
            heading: "Cultural and Co-Curricular Activities",
            content: {
              type: "paragraphs",
              items: [
                `The school also encourages students to participate in cultural programs, exhibitions, and extracurricular activities that help them discover and develop their unique talents. Dedicated spaces for arts, music, and cultural events allow students to express their creativity and build their personality beyond academics.`,
              ],
            },
          },
          {
            heading: "A Safe and Supportive Campus",
            content: {
              type: "paragraphs",
              items: [
                `The campus of <strong>NSK High School</strong> is designed with safety and accessibility in mind. Clean corridors, proper sanitation facilities, and a secure campus environment ensure that students can focus on learning without any distractions. The school continues to invest in upgrading its infrastructure to meet the evolving needs of modern education.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
