import sealImage from "./../assets/seal.png";
import aetnaImage from "./../assets/logo-aetna.png";
import ahcccsImage from "./../assets/logo-ahcccs.png";
import anadImage from "./../assets/logo-anad.png";
import buhpImage from "./../assets/logo-banner-university-family.png";
import beaconImage from "./../assets/logo-beaconhealthoptions.jpg.jpeg";
import bcbsImage from "./../assets/logo-bcbsofa-300x80.png";
import bedaImage from "./../assets/logo-beda.jpg.jpeg";
import care1stImage from "./../assets/logo-care-1st.png";
import cignaImage from "./../assets/logo-cigna.png";
import cmsgovImage from "./../assets/logo-cmsgov.png";
import humanaImage from "./../assets/logo-humana.png";
import iaedpImage from "./../assets/logo-iaedp.jpg.jpeg";
import mcGellanImage from "./../assets/logo-mcgellan-healthcare.png";
import mercyCareImage from "./../assets/logo-mercycareaz.png";
import mhnImage from "./../assets/logo-mhn.png";
import tricareImage from "./../assets/logo-tricare.png";
import usvaImage from "./../assets/logo-usva.png";
import verifiedImage from "./../assets/verification.gif";
import abc115Image from "./../assets/logo-abc15.png";
import InfiniteCarousel from "./InfiniteCarousel";

export default function InsuranceSection() {
  const insuranceLogos = [
    aetnaImage,
    bcbsImage,
    ahcccsImage,
    anadImage,
    buhpImage,
    beaconImage,
    bedaImage,
    care1stImage,
    cignaImage,
    cmsgovImage,
    humanaImage,
    iaedpImage,
    mcGellanImage,
    mercyCareImage,
    mhnImage,
    tricareImage,
    usvaImage,
    verifiedImage,
    abc115Image
  ];

  return (
    <section>
      <div className="text-center flex flex-col items-center gap-6 w-full h-auto font-main">
        <img
          src={sealImage}
          alt="The Joint Commission | National Quality Approval"
          className="h-30 object-contain"
        />
        <p className="px-4 text-mediumgray text-lg font-light">
          We work with most PPO and HMO Insurance Companies
        </p>
        <h2 className="px-4 text-offblack font-heading font-semithick text-2xl max-w-4xl">
          These are some of our partners who are contracted and some who are PPO:
        </h2>

        <div className="w-full max-w-6xl mt-6">
          <InfiniteCarousel
            images={insuranceLogos}
            autoScrollSpeed={60}
            itemWidth={window.innerWidth > 720 ? 100 : 60}
            gap={30}
          />
        </div>
      </div>
    </section>
  );
}