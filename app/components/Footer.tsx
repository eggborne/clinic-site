import { Link } from "react-router";
import logoWhite from "../assets/wd-recovery-and-wellness-center-logo-white.png";
import bgImage from "../assets/healing-love.jpg.jpeg";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 font-light text-sm footer-bg bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/90">cocks</div>
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 border-b border-gray-700 pb-8 mb-8 text-button font-heading text-lg">
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Have a question? Call us today!</p>
              <p className="text-white font-bold text-lg">480-681-0453</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Need support? Send us a comment!</p>
              <p className="text-white font-bold text-sm">info@wdrecoverycenters.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="flex flex-col gap-2 text-white font-bold">
              <p>Mon-Fri: 9am–9pm</p>
              <p>Sat: 9am–1pm</p>
            </div>
          </div>
        </div>

        {/* Lower Grid */}
        <div className="grid md:grid-cols-4 gap-8 font-heading">
          <div className="flex flex-col gap-6">
            <img src={logoWhite} />
            <p>
              WD Recovery & Wellness Center has provided high quality clinical programs for over 20 years. It is our
              mission to help save the lives of those suffering from different disorders. Our primary purpose is to treat the
              dysfunctional behavior in a supportive environment.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl mb-2">We Can Help!</h4>
            <ul className="space-y-3">
              <li>📞 480-681-0453</li>
              <li>📧 info@wdrecoverycenters.com</li>
              <li>📍 6520 North 7th Street, Phoenix, AZ 85014</li>
              <li>🕒 Hours: Mon–Fri: 9am–9pm • Sat: 9am–1pm</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl mb-2">Latest News</h4>
            <ul className="space-y-1">
              <li>
                <p className="text-white font-semibold">Diabetes & Eating Disorders</p>
                <p className="text-gray-400 text-xs">February 9, 2023</p>
              </li>
              <li>
                <p className="text-white font-semibold">Creative Expression</p>
                <p className="text-gray-400 text-xs">February 9, 2023</p>
              </li>
              <li>
                <p className="text-white font-semibold">Alcohol Friend</p>
                <p className="text-gray-400 text-xs">February 9, 2023</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-2">Staff & Patient Resources</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">BEST NOTES</a></li>
              <li><a href="#" className="hover:underline">OFFICE</a></li>
              <li><a href="#" className="hover:underline">EMAIL</a></li>
              <li><a href="#" className="hover:underline">ATTENDANCE</a></li>
              <li><a href="#" className="hover:underline">JOURNALING</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-full">Privacy Policy</button>
          <button className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-full">Terms and Conditions</button>
          <button className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-full">HIPAA Compliance Notice</button>
        </div>

        <div className="pt-8 px-8 text-transwhite text-s flex flex-col gap-6">
          <p>Disclaimer: The information provided on this website is for educational and informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition or treatment. WD Recovery and Wellness Centers complies with all applicable laws and regulations, including HIPAA, to protect your privacy and maintain the confidentiality of your health information. However, the use of this website does not establish a doctor-patient relationship. If you are experiencing a medical emergency or mental health crisis, please call 911 immediately or visit your nearest emergency facility. This website may contain links to third-party resources for convenience; WD Recovery and Wellness Centers does not endorse or assume responsibility for the accuracy or content of these external sites.</p>

          <p>
          Insurance and Payment Information: Insurance acceptance and coverage are subject to verification. Payment arrangements and costs may vary based on individual circumstances and the specifics of your treatment plan. By using this website, you agree to the Terms and Conditions and acknowledge reading and understanding our Privacy Policy. If you have questions or concerns, please get in touch with us directly at (555) 123-4567 or email info@wdrecoverycenters.com
          </p>
          <p className="text-center">&copy; {new Date().getFullYear()} WD Recovery & Wellness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}