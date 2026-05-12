import AboutUs from '@/components/AboutUs';
import EliteFacilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import LandingPage from '@/components/Hero'
import SchoolLevelsSection from '@/components/SchoolLevels';
import ImageGallary from '@/components/ImageGallary'
import WhyUs from '@/components/WhyUs';

const page = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs/>
      <EliteFacilities/>
      <SchoolLevelsSection/>
      <WhyUs/>
      <ImageGallary/>
      <Footer/>
    </div>
  );
}

export default page
