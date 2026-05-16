import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function SportsActivityPage() {
  return (
    <PageLayout title="Sports Activity" heroImage="/study.jpg">
      <FacilityPageContent
        title="Sports Activity"
        intro={[
          `At <strong>NSK High School</strong>, sports activities are more than just games—they are an important part of our holistic approach to education. Sports help students stay physically active while developing important qualities such as teamwork, discipline, and determination.`,
          `Through regular sports programs and activities, students learn the value of hard work, cooperation, and healthy competition, which are essential for their overall growth and development.`,
        ]}
        sections={[
          {
            heading: "Building Strong and Confident Students",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, we believe that sports play a key role in shaping a confident and well-balanced personality. Participation in sports helps students improve their physical fitness, develop leadership qualities, and build strong friendships with their peers.`,
                `Our sports programs encourage students to stay active, develop new skills, and enjoy the spirit of teamwork.`,
              ],
            },
          },
          {
            heading: "A Variety of Sports for Every Interest",
            content: {
              type: "paragraphs",
              items: [
                `We offer a wide range of sports to cater to diverse interests and talents, including:`,
              ],
            },
          },
          {
            heading: "",
            content: {
              type: "paragraphs",
              items: [
                `<strong>Team Sports:</strong> Football, Basketball, Volleyball, and Cricket.`,
                `<strong>Individual Sports:</strong> Athletics, Badminton, Table Tennis, and Chess.`,
                `<strong>Adventure Activities:</strong> Rock climbing and trekking for our outdoor enthusiasts.`,
              ],
            },
          },
          {
            heading: "Learning Values Through Sports",
            content: {
              type: "paragraphs",
              items: [
                `Sports activities at <strong>NSK High School</strong> help students learn important life values such as perseverance, respect, discipline, and sportsmanship. These values not only help them succeed in sports but also guide them in their academic and personal lives.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
