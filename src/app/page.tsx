import FeautredCourses from "@/components/FeautredCourses";
import Herosection from "@/components/Herosection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen  bg-black/[0.96]  antialiased bg-grid-white/[0.02]">
    <Herosection/>
    <FeautredCourses/>
    <WhyChooseUs />
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
   </main>
  );
}
