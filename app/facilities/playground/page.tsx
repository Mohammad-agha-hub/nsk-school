import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function PlayGroundPage() {
  return (
    <PageLayout title="Play Ground" heroImage="/playground.jpg">
      <FacilityPageContent
        title="Playground at NSK High School: A Hub of Fun and Learning"
        intro={[
          `At <strong>NSK High School</strong>, the playground is more than just a place for recreation—it is an important part of the overall learning environment. It provides students with a safe and energetic space where they can stay active, relax, and develop essential physical and social skills.`,
          `Designed to encourage fitness, creativity, and teamwork, the playground offers students the opportunity to enjoy outdoor activities while maintaining a healthy and balanced lifestyle.`,
        ]}
        sections={[
          {
            heading: "Well-Designed Play Area",
            content: {
              type: "paragraphs",
              items: [
                `The playground at <strong>NSK High School</strong> includes various play and sports facilities that support both structured games and free play. From swings and slides to open spaces for running and sports activities, the playground is designed to promote physical development while ensuring student safety.`,
                `Students can participate in different activities such as running, outdoor games, and team sports that help improve their strength, coordination, and overall fitness.`,
              ],
            },
          },
          {
            heading: "Encouraging Social Interaction",
            content: {
              type: "paragraphs",
              items: [
                `The playground also plays a vital role in the social development of students. It allows children from different classes and age groups to interact, share experiences, and build friendships. Through games and team activities, students learn valuable skills such as cooperation, teamwork, communication, and problem-solving.`,
              ],
            },
          },
          {
            heading: "A Space for Creativity and Exploration",
            content: {
              type: "paragraphs",
              items: [
                `Beyond physical activities, the playground serves as a space where students can explore, imagine, and express themselves. The open environment encourages group activities, creative play, and outdoor learning experiences that support both mental and emotional development.`,
              ],
            },
          },
          {
            heading: "A Healthy and Happy Environment",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the playground acts as an extension of the classroom by promoting physical fitness, emotional well-being, and social growth. Whether during break time or sports activities, it is a place filled with energy, laughter, and learning.`,
                `The playground helps students stay active, develop confidence, and enjoy their school experience while building healthy habits for life.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
