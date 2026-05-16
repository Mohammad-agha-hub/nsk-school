import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function ChemistryLabPage() {
  return (
    <PageLayout title="Chemistry Lab" heroImage="/chair.webp">
      <FacilityPageContent
        title="Welcome to the Chemistry Lab at NSK High School"
        intro={[
          `The <strong>Chemistry Lab at NSK High School</strong> is an exciting and engaging space where students explore the fascinating world of chemicals and reactions. It provides students with the opportunity to perform safe and practical experiments that help them understand scientific concepts in a clear and interesting way.`,
          `In the laboratory, students learn how different substances interact with each other and how chemical reactions create new materials. By working with laboratory equipment such as test tubes, beakers, and safety goggles, students gain hands-on experience while also understanding the importance of laboratory safety and proper scientific procedures.`,
        ]}
        sections={[
          {
            heading: "Practical Learning Experience",
            content: {
              type: "paragraphs",
              items: [
                `Each lesson in the <strong>Chemistry Lab at NSK High School</strong> is designed to be interactive, practical, and easy to understand. Through experiments and demonstrations, students discover important chemistry concepts in a fun and engaging manner.`,
                `Hands-on activities help students develop observation skills, analytical thinking, and scientific curiosity. These practical sessions allow students to connect classroom theory with real-life scientific applications.`,
              ],
            },
          },
          {
            heading: "Building a Strong Foundation in Science",
            content: {
              type: "paragraphs",
              items: [
                `The main goal of the chemistry laboratory is to make science learning enjoyable while building a strong academic foundation. By participating in experiments and activities, students develop a deeper understanding of chemistry and gain confidence in their scientific abilities.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
