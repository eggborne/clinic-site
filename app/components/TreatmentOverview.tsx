import { Link } from "react-router";

export default function TreatmentOverview() {
  return (
    <section className="flex flex-col">
      <div className="bg-banner p-6 pb-8 x-auto px-4 flex flex-col place-items-center">
        <h2 className="text-[2.5rem] font-bold text-headline mb-4">WHAT WE TREAT</h2>
        <p className="text-center font-heading tracking-[1px] text-2xl max-w-[95%] text-white font-normal mb-8">
          Eating Disorders, Substance Abuse, PTSD, Personality Disorder, Sex Addiction,
          Alcoholism, Self Harm, Sexual Abuse Disorder, Internal Family Systems,
          Dissociative Identity Disorders, Bullying Disorder, Gambling, Trauma & Dissociation,
          Body Image Dysmorphic Disorder, Suicide Ideation Disorder, and Obsessive-Compulsive
          Personality Disorder (OCPD).
        </p>
        <Link
          to="/our-services"
          className="inline-block bg-neutral-800 text-white font-semibold border-2 border-neutral-800 py-4 px-6.5 rounded-xs hover:bg-transparent transition"
        >
          LEARN MORE &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 m-6">
        <div className="shadow rounded overflow-hidden flex flex-col gap-6">
          <img
            src="./app/assets/personality-disorder-home-page-module.jpg.jpeg"
            alt="Get Help From Our Team"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 bg-offblack text-white ">
            <h3 className="font-heading font-normal text-xl font-bold mb-2">GET HELP FROM OUR TEAM</h3>
            <p className="font-main text-sm font-light mb-4">
              WD Recovery & Wellness Center provides high-quality clinical programs.
            </p>
            <Link
              to="/contact"
              className="text-gray-100 font-semibold hover:underline"
            >
              LEARN MORE &gt;
            </Link>
          </div>
        </div>

        <div className="shadow rounded overflow-hidden flex flex-col gap-6">
          <img
            src=".\app\assets\alcoholism-addiction-inner-page.jpg.jpeg"
            alt="How Do I Control"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 bg-offblack text-white ">
            <h3 className="font-heading font-normal text-xl font-bold mb-2">HOW DO I CONTROL.</h3>
            <p className="font-main text-sm font-light mb-4">
              A mental health problem in which your personality and behavior cause you or others distress.
            </p>
            <Link
              to="/personality-disorders"
              className="text-gray-100 font-semibold hover:underline"
            >
              LEARN MORE &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}