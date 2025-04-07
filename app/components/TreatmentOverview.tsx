import { Link } from "react-router";

export default function TreatmentOverview() {
  return (
    <section className="flex flex-col bg-amber-900">
      <div className="bg-red-700 p-6 x-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">WHAT WE TREAT</h2>
        <p className="text-lg text-white font-medium leading-relaxed max-w-4xl mx-auto mb-8">
          Eating Disorders, Substance Abuse, PTSD, Personality Disorder, Sex Addiction,
          Alcoholism, Self Harm, Sexual Abuse Disorder, Internal Family Systems,
          Dissociative Identity Disorders, Bullying Disorder, Gambling, Trauma & Dissociation,
          Body Image Dismorphic Disorder, Suicide Ideation Disorder, and Obsessive-Compulsive
          Personality Disorder (OCPD).
        </p>
        <Link
          to="/our-services"
          className="inline-block bg-neutral-800 text-white font-semibold border-2 border-neutral-800 py-4 px-6.5 rounded-xs hover:bg-transparent transition"
        >
          LEARN MORE &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mt-12">
        <div className="bg-white shadow rounded overflow-hidden">
          <img
            src="./app/assets/personality-disorder-home-page-module.jpg.jpeg"
            alt="Get Help From Our Team"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">GET HELP FROM OUR TEAM</h3>
            <p className="mb-4">
              WD Recovery & Wellness Center provides high-quality clinical programs.
            </p>
            <Link
              to="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              LEARN MORE &gt;
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img
            src=".\app\assets\alcoholism-addiction-inner-page.jpg.jpeg"
            alt="How Do I Control"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">HOW DO I CONTROL.</h3>
            <p className="mb-4">
              A mental health problem in which your personality and behavior cause you or others distress.
            </p>
            <Link
              to="/personality-disorders"
              className="text-blue-600 font-semibold hover:underline"
            >
              LEARN MORE &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}