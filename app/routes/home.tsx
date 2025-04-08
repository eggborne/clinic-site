// import HeroSlider from "../components/HeroSlider";
// import InsurancePartners from "../components/InsurancePartners";
import AboutSection from "../components/AboutSection";
import TreatmentOverview from "../components/TreatmentOverview";
import heroImage from "../assets/slides/mirror-daughter-mother.jpg.jpeg";
import HelpBanner from "../components/HelpBanner";
import InsuranceSection from "../components/InsuranceSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">

      <div className="">
        <img src={heroImage} />
      </div>

      <AboutSection />
      <TreatmentOverview />
      <HelpBanner />
      <InsuranceSection />
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.421030313334!2d-111.5483306236149!3d33.41551450080695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a61d460342d43%3A0x54f2d911fd7f9c3d!2sWD%20Recovery%20%26%20Wellness%20Center!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0 w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}