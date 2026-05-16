import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function SurveillanceSecurityPage() {
  return (
    <PageLayout title="Surveillance Security" heroImage="/survillence.jpg">
      <FacilityPageContent
        title="Surveillance Security: A Gateway to Safer Learning Environments"
        intro={[
          `In today's rapidly changing world, ensuring the safety and security of students is one of the highest priorities for every educational institution. At <strong>NSK High School</strong>, we are committed to providing a safe, supportive, and well-protected environment where students can focus on learning and personal development with confidence.`,
          `To maintain a secure campus, <strong>NSK High School</strong> has implemented effective surveillance and safety measures that help monitor activities and protect students, staff, and school property.`,
        ]}
        sections={[
          {
            heading: "Key Features",
            content: {
              type: "paragraphs",
              items: [
                `<strong>Surveillance security</strong> refers to the use of modern technology such as cameras and monitoring systems to observe and maintain safety within school premises. In educational institutions, these systems help prevent unauthorised entry, discourage misconduct, and enable quick action during emergencies.`,
              ],
            },
          },
          {
            heading: "Benefits of Surveillance Security in Schools",
            content: {
              type: "features",
              items: [
                {
                  label: "Enhanced Safety",
                  description:
                    "Cameras installed in hallways, entrances, corridors, and playgrounds help monitor activities and ensure a safe environment for students.",
                },
                {
                  label: "Prevention of Misconduct",
                  description:
                    "The presence of surveillance systems discourages bullying, vandalism, and other inappropriate behaviour within the campus.",
                },
                {
                  label: "Quick Emergency Response",
                  description:
                    "Continuous monitoring allows school staff to respond quickly to unexpected situations or emergencies.",
                },
                {
                  label: "Parental Peace of Mind",
                  description:
                    "Parents feel reassured knowing their children are studying in a safe and secure environment.",
                },
                {
                  label: "Evidence and Transparency",
                  description:
                    "Recorded footage can be used when necessary to review incidents and ensure fair resolutions.",
                },
              ],
            },
          },
          {
            heading: "Surveillance Systems at NSK High School",
            content: {
              type: "features",
              items: [
                {
                  label: "High-Definition Cameras",
                  description:
                    "Cameras are strategically placed across important areas of the campus to monitor activities effectively.",
                },
                {
                  label: "Controlled Entry Points",
                  description:
                    "Access to certain areas is carefully monitored to ensure only authorised individuals can enter.",
                },
                {
                  label: "Regular Monitoring",
                  description:
                    "School authorities regularly monitor the system to maintain safety and respond quickly when required.",
                },
              ],
            },
          },
          {
            heading: "Maintaining a Balance: Privacy and Security",
            content: {
              type: "paragraphs",
              items: [
                `While maintaining strong security measures, <strong>NSK High School</strong> also respects the privacy of students and staff. Surveillance cameras are installed only in public areas of the school campus, and strict policies are followed to ensure that recorded footage is used responsibly and ethically.`,
                `At <strong>NSK High School</strong>, our goal is to create a <strong>safe, secure, and positive learning environment</strong> where every student can learn, grow, and succeed with confidence.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
