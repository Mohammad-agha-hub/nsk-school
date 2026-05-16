import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/layout/PageHero";

interface PageLayoutProps {
  /** Page title shown in the hero banner */
  title: string;
  /** Optional custom hero background image path in /public */
  heroImage?: string;
  /** Page content goes here */
  children: React.ReactNode;
}

/**
 * PageLayout
 *
 * Drop this around any inner page content.
 * It automatically adds:
 *  - The navbar (solid navy mode for inner pages)
 *  - The hero banner with the page title
 *  - The footer
 *
 * Usage:
 *   <PageLayout title="Introduction">
 *     <InnerPageContent {...props} />
 *   </PageLayout>
 */
export default function PageLayout({
  title,
  heroImage,
  children,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/*
        Hero + Navbar share the same stacking context, exactly like the landing page.
        The Navbar floats on top of the hero image so backdrop-blur has pixels to blur.
        z-[200] keeps dropdowns above everything else.
      */}
      <div className="relative">
        {/* Navbar floats over the hero in glass mode */}
        <div className="absolute top-0 left-0 right-0 z-[200]">
          <Navbar solid={false} />
        </div>

        {/* Hero renders behind the navbar */}
        <PageHero title={title} backgroundImage={heroImage} />
      </div>

      {/* Page-specific content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
