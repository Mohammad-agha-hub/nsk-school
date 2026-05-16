import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function AnnualDayPage() {
  return (
    <PageLayout title="Annual Day" heroImage="/annual.jpg">
      <FacilityPageContent
        title="Annual Day Celebration at NSK High School"
        intro={[
          `The <strong>Annual Day celebration at NSK High School</strong> is one of the most exciting and memorable events of the year. It is a wonderful occasion where students, teachers, and parents come together to celebrate the achievements, talents, and cultural spirit of the school community.`,
          `The event usually begins with a grand opening ceremony, including the traditional lamp lighting and a welcome address by the Principal. This inspiring start highlights the importance of holistic education, creativity, and participation in extracurricular activities.`,
        ]}
        sections={[
          {
            heading: "Cultural Programs and Performances",
            content: {
              type: "paragraphs",
              items: [
                `The Annual Day program features a wide range of cultural performances presented by students. These performances include energetic dance routines, musical performances, stage plays, and inspiring speeches. Each presentation reflects creativity, teamwork, and the values that the school encourages among its students.`,
              ],
            },
          },
          {
            heading: "Highlights of the Celebration",
            content: {
              type: "features",
              items: [
                {
                  label: "Awards Ceremony",
                  description:
                    "Outstanding students are recognised for their achievements in academics, sports, and other extracurricular activities.",
                },
                {
                  label: "Cultural Performances",
                  description:
                    "Students from different classes participate in dance, drama, music, and creative presentations that showcase their talents and hard work.",
                },
                {
                  label: "Special Guests",
                  description:
                    "Distinguished guests or community leaders are often invited to attend the event and motivate students with their inspiring words.",
                },
                {
                  label: "Parent Participation",
                  description:
                    "Parents also play an important role in the celebration by supporting and encouraging the students, making the event more joyful and memorable.",
                },
              ],
            },
          },
          {
            heading: "A Festive School Environment",
            content: {
              type: "paragraphs",
              items: [
                `During the Annual Day celebration, the school campus is beautifully decorated with colourful lights, creative displays, and festive arrangements. The entire atmosphere is filled with excitement, pride, and happiness.`,
              ],
            },
          },
          {
            heading: "A Celebration of Talent and Achievement",
            content: {
              type: "paragraphs",
              items: [
                `The <strong>Annual Day at NSK High School</strong> is not just a cultural program but a celebration of learning, creativity, and achievement. It provides students with the opportunity to express their talents, build confidence, and create wonderful memories.`,
                `The event concludes with a vote of thanks, appreciating the efforts of students, teachers, organisers, and parents who contribute to making the celebration a grand success.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
