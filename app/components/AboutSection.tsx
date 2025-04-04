export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="video-column">
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/lCScrsAYwMg"
                title="WD Recovery & Wellness Center in Phoenix, Arizona"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-column">
            <div className="section-header">
              <h4>Transforming Lives</h4>
              <h2>About WD Recovery & Wellness Center</h2>
            </div>
            <div className="section-content">
              <h4>
                The staff at WD Recovery & Wellness Center has been involved in providing high
                quality clinical programs for over 20 years. It is our mission to help save the lives of
                those suffering from different disorders. Our primary purpose is to treat the
                dysfunctional behavior of <strong>Eating Disorders, PTSD, Body Image Dismorphic
                  Disorders, Traumas and Dissociations, Internal Family Systems, Dissociative Identity
                  Disorders, Bullying Disorder, Sexual Abuse Disorder, Personality Disorders, Substance
                  Abuse, Sex Addiction, Alcoholism, Self Harm, Gambling Addiction, Suicide Ideation
                  Disorder, and Obsessive-Compulsive Personality Disorder OCPD</strong> in a supportive
                environment. Our treatment approach is centered on the special needs of each individual,
                to help them achieve recovery.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}