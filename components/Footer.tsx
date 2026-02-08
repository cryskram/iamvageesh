import { FaCopyright, FaHeart, FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center py-8 text-slate-100 text-sm bg-slate-900">
      <p className="inline-flex items-center gap-1 justify-center">
        <FaRegCopyright /> {new Date().getFullYear()} Vageesh G N. Built with{" "}
        <FaHeart />
        and code
      </p>
    </footer>
  );
};

export default Footer;
