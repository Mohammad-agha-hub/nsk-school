import AboutUs from '@/components/AboutUs';
import EliteFacilities from '@/components/Facilities';

import LandingPage from '@/components/Hero'
import SchoolLevelsSection from '@/components/SchoolLevels';
import ImageGallary from '@/components/ImageGallary'
import WhyUs from '@/components/WhyUs';
import AfterSchoolActivities from '@/components/AfterSchoolActivities';
import Testimonials from '@/components/Testemonials';
import CTABanner from '@/components/Cta';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <SchoolLevelsSection />
      <WhyUs />
      <EliteFacilities />
      <AfterSchoolActivities />
      <ImageGallary />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default page
