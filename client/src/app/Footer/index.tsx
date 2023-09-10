import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary flex items-center justify-center px-10">
      <h2 className="text-center py-12 ml-auto text-white text-lg">
        © MedCare Designed and Developed by Team with ❤️
      </h2>
      <a href="https://github.com/vivekkj123/medcare" className="ml-auto">
        <Image height={48} width={48} src="/icons/gh.png" alt="" />
      </a>
    </div>
  );
};

export default Footer;
