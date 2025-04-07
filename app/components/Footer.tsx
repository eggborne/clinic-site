import { Link } from "react-router";
import logoWhite from "../assets/wd-recovery-and-wellness-center-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <span className="text-red-600 text-2xl">☎</span>
            <div>
              <p className="text-gray-400">Have a question? Call us today!</p>
              <p className="text-white font-bold text-lg">480-681-0453</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <span className="text-red-600 text-2xl">✉</span>
            <div>
              <p className="text-gray-400">Need support? Send us a comment</p>
              <p className="text-white font-bold text-lg">info@wdrecoverycenters.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-gray-700 p-4">
            <span className="text-red-600 text-2xl">⏰</span>
            <div>
              <p className="text-white font-bold">Mon-Fri: 9am–9pm</p>
              <p className="text-white font-bold">Sat: 9am–1pm</p>
            </div>
          </div>
        </div>

        {/* Lower Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/assets/wd-recovery-and-wellness-center.png" alt="Logo" className="h-12 mb-3" />
            <p>
              WD Recovery & Wellness Center has provided high quality clinical programs for over 20 years. It is our
              mission to help save the lives of those suffering from different disorders. Our primary purpose is to treat the
              dysfunctional behavior in a supportive environment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">We Can Help!</h4>
            <ul className="space-y-1">
              <li>📞 480-681-0453</li>
              <li>📧 info@wdrecoverycenters.com</li>
              <li>📍 6520 North 7th Street, Phoenix, AZ 85014</li>
              <li>🕒 Hours: Mon–Fri: 9am–9pm • Sat: 9am–1pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">Latest News</h4>
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
            <h4 className="text-white font-bold mb-2">Staff & Patient Resources</h4>
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
          <button className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-full">Privacy Policy</button>
          <button className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-full">Terms and Conditions</button>
          <button className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-full">HIPAA Compliance Notice</button>
        </div>

        <div className="mt-10 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} WD Recovery & Wellness Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}