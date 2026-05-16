import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function MusicPage() {
  return (
    <PageLayout title="Music" heroImage="/img-2.jpg">
      <FacilityPageContent
        title="Music Class"
        showSidebar={false}
        intro={[
          `The <strong>Music Class at NSK High School</strong> is a lively and creative space where students can explore their musical talents and develop a love for music. The program encourages students to express themselves through sound, rhythm, and melody while learning the fundamentals of music.`,
        ]}
        sections={[
          {
            heading: "Learning Through Music",
            content: {
              type: "paragraphs",
              items: [
                `Under the guidance of experienced instructors, students receive training in <strong>vocal music, basic instrumental practice, and music theory</strong>. The classes help students understand different musical elements such as rhythm, pitch, and harmony in an enjoyable and engaging way.`,
              ],
            },
          },
          {
            heading: "Exploring Different Musical Styles",
            content: {
              type: "paragraphs",
              items: [
                `Students are introduced to a variety of musical styles and genres, from traditional and classical music to modern and contemporary forms. This exposure helps them appreciate different musical cultures and develop a broader understanding of music.`,
              ],
            },
          },
          {
            heading: "Creative and Interactive Activities",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Music Class at NSK High School</strong> includes activities such as singing, group performances, rhythm exercises, and musical games. Students also get opportunities to perform during school events and cultural programs, helping them build confidence and stage presence.`,
              ],
            },
          },
          {
            heading: "Building Confidence and Teamwork",
            content: {
              type: "paragraphs",
              items: [
                `Music activities often involve group participation, which helps students learn teamwork, cooperation, and communication skills. Working together on musical performances strengthens friendships and encourages creativity.`,
              ],
            },
          },
          {
            heading: "Encouraging Artistic Expression",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the Music Class plays an important role in nurturing creativity and artistic expression. It provides students with a strong foundation in music while helping them develop confidence, discipline, and a lifelong appreciation for the art of music.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
