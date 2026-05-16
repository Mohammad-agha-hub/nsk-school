import PageLayout from "@/components/layout/PageLayout";
import FacilityPageContent from "@/components/layout/FacilityPageContent";

export default function TransportFacilityPage() {
  return (
    <PageLayout title="Transport Facility" heroImage="/trans.jpg">
      <FacilityPageContent
        title="Transport Facility"
        intro={[
          `At <strong>NSK High School</strong>, we ensure a safe, comfortable, and reliable journey for our students through our well-managed transport system. We understand that a child's secure and smooth travel to and from school is a top priority for parents. That is why our transport facility is designed to provide a convenient and dependable commuting experience supported by responsible drivers and attentive staff.`,
          `Our school transport service helps make daily travel stress-free for both students and parents, ensuring that children reach school safely and return home on time.`,
        ]}
        sections={[
          {
            heading: "What is a Transport Facility?",
            content: {
              type: "paragraphs",
              items: [
                `A <strong>transport facility</strong> refers to the service provided by a school to help students travel safely between their homes and the school campus. This usually includes school buses or authorised vehicles that pick up students from designated stops and drop them back after school hours.`,
                `A well-organised transport system ensures regular attendance, punctuality, and convenience for students as well as parents.`,
              ],
            },
          },
          {
            heading: "Why is a Transport Facility Important?",
            content: {
              type: "features",
              items: [
                {
                  label: "Safety",
                  description:
                    "Trained drivers and supervising staff ensure that students travel securely every day.",
                },
                {
                  label: "Convenience",
                  description:
                    "Parents feel relaxed knowing their children are picked up and dropped off safely.",
                },
                {
                  label: "Punctuality",
                  description:
                    "A structured transport schedule helps students arrive at school on time and prepared for the day.",
                },
                {
                  label: "Accessibility",
                  description:
                    "It allows students from different areas to attend the school easily, creating a diverse learning environment.",
                },
              ],
            },
          },
          {
            heading: "Transport Facilities at NSK High School",
            content: {
              type: "paragraphs",
              items: [
                `At <strong>NSK High School</strong>, the safety and comfort of our students are always our highest priorities. Our transport service is carefully organised to provide a secure and dependable travel experience.`,
                `We operate comfortable school buses that follow fixed routes and stop at selected locations for convenient pick-up and drop-off. Each bus is driven by a trained and responsible driver who follows strict safety guidelines. A school staff member is also present on board to supervise students during the journey.`,
                `Our transport system runs on a well-planned schedule to ensure punctuality. Parents are informed about bus routes and timings so they can plan their day easily.`,
                `For additional safety, all school vehicles are regularly inspected and maintained. Basic safety equipment such as first-aid kits is available on every bus to ensure a safe and smooth journey for all students.`,
                `At <strong>NSK High School</strong>, we are committed to making every child's journey to school safe, comfortable, and reliable.`,
              ],
            },
          },
        ]}
      />
    </PageLayout>
  );
}
