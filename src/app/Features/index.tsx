import Image from "next/image";
import "./styles.css";

const Features = () => {
  return (
    <div className="bg-accent-2">
      <h2 className="text-3xl text-center py-12 md:py-20 text-primary font-bold">
        Features
      </h2>
      <div className="grid md:grid-cols-2  text-center px-16">
        <div className="infoBox md:border-b-2 md:border-r-2">
          <Image
            alt="smiling face"
            className="mx-auto py-6"
            width={60}
            height={60}
            src="/icons/teenyicons_face-id-outline.svg"
          />
          <h2 className="font-bold text-xl my-2">
            Unique & Trustable Identity
          </h2>
          <p>
            Establish unique identity across different healthcare providers
            within the healthcare ecosystem
          </p>
        </div>
        <div className="infoBox md:border-b-2 md:border-l-2">
          <Image
            className="mx-auto py-6"
            alt="smiling face"
            width={60}
            height={60}
            src="/icons/cil_smile.svg"
          />
          <h2 className="font-bold text-xl my-2">Hassle-free Access</h2>
          <p>
            Avoid long lines for registration in healthcare facilities across
            the globe
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 text-center px-16">
        <div className="infoBox md:border-t-2 md:border-r-2">
          <Image
            className="mx-auto py-6"
            alt="register icon"
            width={60}
            height={60}
            src="/icons/mdi_register-outline.svg"
          />
          <h2 className="font-bold text-xl my-2">Easy Sign Up</h2>
          <p>
            Seamless sign up for MedCare and minimal UI for displaying your
            medical records
          </p>
        </div>
        <div className="infoBox md:border-t-2 md:border-l-2">
          <Image
            className="mx-auto py-6"
            alt="secure icon"
            width={60}
            height={60}
            src="/icons/grommet-icons_secure.svg"
          />
          <h2 className="font-bold text-xl my-2">Secure</h2>
          <p>
            GDPR Ready, SOC2, HIPAA, PCI Compliant, ISO27001 Secure User
            Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
