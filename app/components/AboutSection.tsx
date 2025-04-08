export default function AboutSection() {
  return (
    <section className="bg-white font-heading">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Video Column */}
        <div className="aspect-video rounded-md overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/lCScrsAYwMg"
            title="WD Recovery & Wellness Center in Phoenix, Arizona"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Column */}
        <div>
          <div className="mb-6">
            <h4 className="text-mediumgray font-main text-lg font-light tracking-wide">
              Transforming Lives
            </h4>
            <h2 className="text-2xl font-medium text-gray-900 mt-2">
              About WD Recovery & Wellness Center
            </h2>
          </div>
          <p className="text-offblack text-lg leading-normal text-base">
            The staff at WD Recovery & Wellness Center has been involved in providing high
            quality clinical programs for over 20 years. It is our mission to help save the lives of
            those suffering from different disorders. Our primary purpose is to treat the
            dysfunctional behavior of{" "}
            <strong className="font-semibold text-black">
              Eating Disorders, PTSD, Body Image Dysmorphic
              Disorders, Traumas and Dissociations, Internal Family Systems, Dissociative Identity
              Disorders, Bullying Disorder, Sexual Abuse Disorder, Personality Disorders, Substance
              Abuse, Sex Addiction, Alcoholism, Self Harm, Gambling Addiction, Suicide Ideation
              Disorder, and Obsessive-Compulsive Personality Disorder (OCPD)
            </strong>{" "}
            in a supportive environment. Our treatment approach is centered on the special needs of
            each individual, to help them achieve recovery.
          </p>
        </div>
      </div>
    </section>
  );
}
