import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function KidsPlayPage() {
  return (
    <PageLayout title="Kids Play" heroImage="/play.jpg">
      <FacilityPageContent
        title="Kids Play"
        showSidebar={false}
        intro={[
          `The <strong>Kids Play area at NSK High School</strong> is a lively and engaging space designed to support children's creativity, physical development, and social interaction. It provides a safe and enjoyable environment where young students can play, explore, and learn through fun activities.`,
        ]}
        sections={[
          {
            heading: "Fun and Active Playtime",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Kids Play program at NSK High School</strong> includes a variety of exciting activities such as playground games, group exercises, and interactive play sessions. These activities help children stay active while developing coordination, balance, and motor skills.`,
              ],
            },
          },
          {
            heading: "Safe and Child-Friendly Environment",
            content: {
              type: "paragraphs",
              items: [
                `The play area is equipped with safe and age-appropriate play equipment that encourages children to explore and enjoy their time outdoors. Safety is a top priority, ensuring that every child can play freely in a secure and well-supervised environment.`,
              ],
            },
          },
          {
            heading: "Encouraging Social Skills",
            content: {
              type: "paragraphs",
              items: [
                `Playtime is also an opportunity for children to interact with their classmates, make new friends, and learn the value of teamwork and cooperation. Through group games and shared activities, students develop communication skills and confidence.`,
              ],
            },
          },
          {
            heading: "Guided by Caring Teachers",
            content: {
              type: "paragraphs",
              items: [
                `Teachers at <strong>NSK High School</strong> actively guide play activities to ensure that children learn important values such as sharing, teamwork, and problem-solving while having fun.`,
              ],
            },
          },
          {
            heading: "Balanced Learning Through Play",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the Kids Play program maintains a healthy balance between structured activities and free play. This approach helps children develop physically, emotionally, and socially while enjoying a fun and enriching school experience.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
