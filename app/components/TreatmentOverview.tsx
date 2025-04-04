// src/components/TreatmentOverview.tsx
import { Link } from "react-router";

export default function TreatmentOverview() {
  return (
    <section className="treatment-overview">
        <div className="treatment-header">
          <h2>WHAT WE TREAT</h2>
          <p>
            Eating Disorders, Substance Abuse, PTSD, Personality
            Disorder, Sex Addiction, Alcoholism, Self Harm, Sexual Abuse
            Disorder, Internal Family Systems, Dissociative Identity Disorders,
            Bullying Disorder, Gambling, Trauma & Dissociation, Body Image
            Dismorphic Disorder, Sexual Abuse Disorder, Suicide Ideation Disorder,
            and Obsessive-Compulsive Personality Disorder
          </p>
          <Link to="/our-services" className="cta-button">LEARN MORE &gt;</Link>
        </div>

        <div className="treatment-cards">
          <div className="treatment-card">
            <div className="card-image">
              <img src="/assets/personality-disorder-home-page-module.jpg" alt="Get Help From Our Team" />
            </div>
            <div className="card-content">
              <h2>GET HELP FROM OUR TEAM</h2>
              <p>WD Recovery & Wellness Center provides high-quality clinical programs.</p>
              <Link to="/contact" className="card-link">LEARN MORE &gt;</Link>
            </div>
          </div>

          <div className="treatment-card">
            <div className="card-image">
              <img src="/assets/alcoholism-addiction-inner-page.jpg" alt="How Do I Control" />
            </div>
            <div className="card-content">
              <h2>HOW DO I CONTROL...</h2>
              <p>A mental health problem in which your personality and behavior cause you or others distress.</p>
              <Link to="/personality-disorders" className="card-link">LEARN MORE &gt;</Link>
            </div>
          </div>
        </div>

        {/* <div className="treatment-philosophy">
          <h4>
            WD Recovery & Wellness Center provides Empowerment and Healing of Addiction and Disorder Recovery in Arizona.
            We firmly believe in saving lives and transforming the well-being of individuals burdened by various challenges.
          </h4>

          <h4>
            With a comprehensive focus on healing, we specialize in addressing a range of
            conditions that include <strong><Link to="/eating-disorders">Eating Disorders</Link>, <Link to="/post-traumatic-stress-disorder-ptsd">Post-Traumatic
              Stress Disorder (PTSD)</Link>, <Link to="/body-image-dysmorphic-disorder">Body Image
                Dysmorphic Disorders</Link>, <Link to="/trauma-and-dissociation-disorder">Traumas and
                  Dissociations</Link>, <Link to="/internal-family-systems-therapy">Internal
                    Family Systems</Link>, <Link to="/personality-disorders">Dissociative Identity
                      Disorders</Link>, <Link to="/bullying-disorder">Bullying
                        Disorder</Link>, <Link to="/sexual-abuse-disorder">Sexual
                          Abuse Disorder</Link>, <Link to="/personality-disorders">Personality
                            Disorders</Link>, <Link to="/drugs-and-substance-addiction">Substance
                              Abuse</Link>, <Link to="/sex-addiction">Sex Addiction</Link>,
              <Link to="/alcoholism">Alcoholism</Link>, <Link to="/self-harm">Self-Harm</Link>, <Link to="/gambling">Gambling</Link>, <Link to="/suicide-ideation-disorder">Suicide
                Ideation</Link>, and <Link to="/obsessive-compulsive-personality-disorder-ocpd">Obsessive-Compulsive
                  Personality Disorder (OCPD)</Link>.</strong> Within our nurturing environment, we
            extend unwavering support to every individual, tailoring our treatment approach to meet
            their unique needs.
          </h4>

          <h4>
            <em><strong>Customized Treatment Plans:</strong></em> We believe that every
            individual's journey to recovery is unique. That's why at WD Recovery &
            Wellness Center, we develop personalized treatment plans. Our comprehensive assessments
            allow us to understand the underlying causes of addiction and disorders. Our experienced
            treatment team creates a customized plan that combines evidence-based therapies,
            counseling, spiritual guidance, and traditional healing practices. By addressing the
            physical, emotional, and spiritual aspects of recovery, we empower individuals to
            overcome addiction and achieve sustainable wellness.
          </h4>

          <h4>
            <em><strong>Holistic Approach to Healing:</strong></em> At WD Recovery &
            Wellness Center, we adopt a holistic approach to addiction and disorder recovery. We recognize
            that healing encompasses more than just addressing the symptoms of addiction. Our center
            offers a wide range of holistic therapies, such as yoga, meditation, art therapy,
            equine-assisted therapy, and outdoor experiential activities. These practices promote
            self-discovery, stress reduction, emotional well-being, and spiritual growth. By
            integrating these holistic modalities with evidence-based treatments, we provide a
            comprehensive healing experience that nurtures the mind, body, and spirit of patients
            seeking recovery.
          </h4>

          <h4>
            <em><strong>Aftercare and Ongoing Support:</strong></em> Recovery is a lifelong
            journey, and at WD Recovery & Wellness Center, we are committed to providing ongoing
            support beyond the initial treatment phase. Our aftercare programs are designed to help
            individuals transition back into the community with the necessary tools and resources
            for sustained recovery. We offer relapse prevention strategies, alumni support groups,
            family therapy, and access to community resources. Our dedicated team remains connected
            with individuals even after they complete their treatment, offering guidance,
            counseling, and encouragement to ensure long-term success in their recovery journey.
          </h4>

          <h4>
            WD Recovery & Wellness Center is the leading choice for people in Arizona seeking
            addiction and disorder recovery. Our culturally sensitive approach, personalized
            treatment plans, holistic therapies, and ongoing support are the pillars of our
            comprehensive recovery programs. We are committed to empowering individuals to
            reclaim their lives, heal from addiction, and achieve sustainable wellness.
            If you or a loved one are seeking a recovery center, look no further than
            WD Recovery & Wellness Center. Contact us today to begin your transformative
            journey toward a brighter and healthier future.
          </h4>
        </div> */}
    </section>
  );
}