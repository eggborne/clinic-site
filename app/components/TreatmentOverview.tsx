import { useEffect, useRef } from "react";
import { Link } from "react-router";
import PersonalityModuleImage from "./../assets/personality-disorder-home-page-module.jpg.jpeg";
import AlcoholismModuleImage from "./../assets/alcoholism-addiction-inner-page.jpg.jpeg";

export default function TreatmentOverview() {

  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);
  return (
    <section className="flex flex-col gap-6">
      <div className="bg-banner p-6 x-auto px-4 flex flex-col place-items-center">
        <h2
          ref={headingRef}
          className="text-[2.5rem] font-thick text-headline opacity-0 fade-in"
        >
          WHAT WE TREAT
        </h2>
        <p className="text-center font-heading tracking-[1px] text-2xl max-w-[95%] text-white font-normal my-4">
          Eating Disorders, Substance Abuse, PTSD, Personality Disorder, Sex Addiction,
          Alcoholism, Self Harm, Sexual Abuse Disorder, Internal Family Systems,
          Dissociative Identity Disorders, Bullying Disorder, Gambling, Trauma & Dissociation,
          Body Image Dysmorphic Disorder, Suicide Ideation Disorder, and Obsessive-Compulsive
          Personality Disorder (OCPD).
        </p>
        <Link
          ref={buttonRef}
          to="/our-services"
          className="inline-block text-md my-4 tracking-wider bg-neutral-800 text-white font-semibold border-2 border-neutral-800 py-4 px-6.5 rounded-xs hover:bg-transparent transition opacity-0 fade-in"
        >
          LEARN MORE &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        <div className="shadow rounded overflow-hidden flex flex-col gap-6">
          <img
            src={PersonalityModuleImage}
            alt="Get Help From Our Team"
            className="w-full h-auto object-cover"
          />
          <div className="py-6 bg-offblack text-white h-full flex justify-center">
            <div className="px-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-2">GET HELP FROM OUR TEAM</h3>
              <p className="font-main text-small text-transwhite mb-4">
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
        </div>

        <div className="shadow rounded overflow-hidden flex flex-col gap-6">
          <img
            src={AlcoholismModuleImage}
            alt="How Do I Control"
            className="w-full h-auto object-cover"
          />
          <div className="py-6 bg-offblack text-white h-full flex justify-center">
            <div className="px-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-2">HOW DO I CONTROL...</h3>
              <p className="font-main text-small text-transwhite mb-4">
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
      </div>
      <div className="flex flex-col gap-3 text-lg font-heading px-6">
        <p>WD Recovery &amp; Wellness Center provides Empowerment and Healing of Addiction and Disorder Recovery in Arizona. We firmly believe in saving lives and transforming the well-being of individuals burdened by various challenges.</p>
        <p></p>
        <p><em><strong>Customized Treatment Plans:</strong></em> We believe that every individual&#8217;s journey to recovery is unique. That&#8217;s why at WD Recovery &amp; Wellness Center, we develop personalized treatment plans. Our comprehensive assessments allow us to understand the underlying causes of addiction and disorders. Our experienced treatment team creates a customized plan that combines evidence-based therapies, counseling, spiritual guidance, and traditional healing practices. By addressing the physical, emotional, and spiritual aspects of recovery, we empower individuals to overcome addiction and achieve sustainable wellness.</p>
        <p><em><strong>Holistic Approach to Healing:</strong></em> At WD Recovery &amp; Wellness Center, we adopt a holistic approach to addiction and disorder recovery. We recognize that healing encompasses more than just addressing the symptoms of addiction. Our center offers a wide range of holistic therapies, such as yoga, meditation, art therapy, equine-assisted therapy, and outdoor experiential activities. These practices promote self-discovery, stress reduction, emotional well-being, and spiritual growth. By integrating these holistic modalities with evidence-based treatments, we provide a comprehensive healing experience that nurtures the mind, body, and spirit of patients seeking recovery.</p>
        <p><em><strong>Aftercare and Ongoing Support:</strong></em> Recovery is a lifelong journey, and at WD Recovery &amp; Wellness Center, we are committed to providing ongoing support beyond the initial treatment phase. Our aftercare programs are designed to help individuals transition back into the community with the necessary tools and resources for sustained recovery. We offer relapse prevention strategies, alumni support groups, family therapy, and access to community resources. Our dedicated team remains connected with individuals even after they complete their treatment, offering guidance, counseling, and encouragement to ensure long-term success in their recovery journey.</p>
        <p><a href="https://wdrecoverycenters.com/">WD Recovery &amp; Wellness Center</a> is the leading choice for people in Arizona seeking addiction and disorder recovery. Our culturally sensitive approach, personalized treatment plans, holistic therapies, and ongoing support are the pillars of our comprehensive recovery programs. We are committed to empowering individuals to reclaim their lives, heal from addiction, and achieve sustainable wellness. If you or a loved one are seeking a recovery center, look no further than WD Recovery &amp; Wellness Center. Contact us today to begin your transformative journey toward a brighter and healthier future.</p>
      </div>
    </section>
  );
}