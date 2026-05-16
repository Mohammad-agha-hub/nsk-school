import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function CulturalActivityPage() {
  return (
    <PageLayout title="Cultural Activity" heroImage="/culture.jpg">
      <FacilityPageContent
        title="Cultural Day"
        intro={[
          `The <strong>Cultural Day celebration at NSK High School</strong> is a colorful and joyful event that highlights the creativity, talent, and cultural diversity of our students. It is a special occasion where students get the opportunity to showcase their artistic abilities and celebrate different traditions and cultures.`,
        ]}
        sections={[
          {
            heading: "A Celebration of Talent and Creativity",
            content: {
              type: "paragraphs",
              items: [
                `On Cultural Day, students participate in a variety of performances such as dance, music, drama, poetry, and storytelling. These performances allow students to express themselves creatively and build confidence while performing in front of an audience.`,
              ],
            },
          },
          {
            heading: "Promoting Cultural Awareness",
            content: {
              type: "paragraphs",
              items: [
                `The event encourages students to learn about and appreciate different cultures, traditions, and values. Through traditional costumes, cultural performances, and themed presentations, students gain a deeper understanding of the rich diversity of our society.`,
              ],
            },
          },
          {
            heading: "Building Confidence and Teamwork",
            content: {
              type: "paragraphs",
              items: [
                `Cultural Day also promotes teamwork and cooperation as students work together to prepare performances and presentations. It helps them develop communication skills, stage confidence, and a sense of unity.`,
              ],
            },
          },
          {
            heading: "A Memorable School Event",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Cultural Day at NSK High School</strong> brings together students, teachers, and parents in a festive and lively atmosphere. It is a day filled with music, colors, and joyful celebrations that create lasting memories for everyone involved.`,
                `Through events like Cultural Day, <strong>NSK High School</strong> encourages students to explore their talents, appreciate cultural heritage, and develop confidence in expressing themselves.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
