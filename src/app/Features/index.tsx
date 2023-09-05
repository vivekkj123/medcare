import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-accent-2">
      <h2 className="text-3xl text-center py-20 text-primary font-bold">
        Features
      </h2>
      <div className="grid grid-cols-2  text-center px-16">
        <div className="border-primary-2 border-b-2  border-opacity-20 border-r-2 py-12">
          <Image
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
        <div className="border-primary-2 border-b-2 border-l-2 border-opacity-20 py-12">
          <Image
            className="mx-auto py-6"
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
      <div className="grid grid-cols-2 text-center px-16">
        <div className="border-primary-2 border-t-2 border-opacity-20 border-r-2 py-12">
          <Image
            className="mx-auto py-6"
            width={60}
            height={60}
            src="/icons/mdi_register-outline.svg"
          />
          <h2 className="font-bold text-xl my-2">Easy Sign Up</h2>
          <p>
            Seamless sign up for MRA and minimal UI for displaying your medical
            records
          </p>
        </div>
        <div className="border-primary-2 border-t-2 border-opacity-20 border-l-2 py-12">
          <Image
            className="mx-auto py-6"
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
