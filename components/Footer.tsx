import { FaCopyright, FaHeart, FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 text-center text-sm text-slate-100">
      <p className="inline-flex items-center justify-center gap-1">
        <FaRegCopyright /> {new Date().getFullYear()} Vageesh G N. Built with{" "}
        <FaHeart />
        and code
      </p>
    </footer>
  );
};

export default Footer;
