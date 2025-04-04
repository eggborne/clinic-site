import { Link } from "react-router";
// import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import TreatmentOverview from "../components/TreatmentOverview";
// import InsurancePartners from "../components/InsurancePartners";
export default function Home() {
  return (
    <div className="home-page">
      <AboutSection />
      <TreatmentOverview />
      {/* <BookAppointmentSection />
      <InsurancePartners /> */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8225414365747!2d-112.06557869999999!3d33.5319992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6d4c9fe42afb%3A0x9159c6e33239f5b3!2s6520%20N%207th%20St%2C%20Phoenix%2C%20AZ%2085014!5e0!3m2!1sen!2sus!4v1674794617751!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="WD Recovery & Wellness Center location map"
        ></iframe>
      </div>
    </div>
  );
}