import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function ExhibitionPage() {
  return (
    <PageLayout title="Exhibition" heroImage="/exhibit.jpg">
      <FacilityPageContent
        title="Exhibition"
        intro={[
          `The <strong>Exhibition at NSK High School</strong> is an exciting event where students showcase their creativity, knowledge, and innovative ideas. It provides a platform for students to present their projects, experiments, and models based on different subjects such as science, technology, arts, and social studies.`,
        ]}
        sections={[
          {
            heading: "A Platform for Innovation and Creativity",
            content: {
              type: "paragraphs",
              items: [
                `During the exhibition, students display their work in the form of working models, charts, experiments, and creative projects. These presentations help students apply their classroom learning to practical situations while developing confidence in explaining their ideas.`,
              ],
            },
          },
          {
            heading: "Encouraging Practical Learning",
            content: {
              type: "paragraphs",
              items: [
                `The exhibition encourages <strong>hands-on learning</strong>, where students research topics, design models, and present their findings. This process helps improve their analytical thinking, problem-solving abilities, and presentation skills.`,
              ],
            },
          },
          {
            heading: "Teamwork and Collaboration",
            content: {
              type: "paragraphs",
              items: [
                `Many projects are prepared in groups, allowing students to work together and learn the importance of teamwork and cooperation. They share ideas, divide responsibilities, and support each other in completing their projects successfully.`,
              ],
            },
          },
          {
            heading: "Learning Beyond the Classroom",
            content: {
              type: "paragraphs",
              items: [
                `The exhibition is also an opportunity for students to explore new ideas and learn from the projects created by their classmates. Teachers, parents, and visitors are invited to observe the exhibits, making it a proud moment for students to demonstrate their knowledge and creativity.`,
              ],
            },
          },
          {
            heading: "Inspiring Young Minds",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>School Exhibition at NSK High School</strong> inspires students to think creatively, experiment with new ideas, and develop a deeper interest in learning. It encourages curiosity and innovation while helping students build confidence and communication skills.`,
                `Through such events, <strong>NSK High School</strong> continues to promote practical education and holistic development for every student.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
