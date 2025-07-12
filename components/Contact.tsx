import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const links = [
  {
    label: "GitHub",
    value: "cryskram",
    href: "https://github.com/cryskram",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    value: "vageeshgn",
    href: "https://linkedin.com/in/vageeshgn",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    value: "vageesh404",
    href: "https://instagram.com/vageesh404",
    icon: <FaInstagram />,
  },
  {
    label: "X / Twitter",
    value: "gn_vageesh",
    href: "https://x.com/gn_vageesh",
    icon: <FaTwitter />,
  },
  {
    label: "Email",
    value: "vageeshgn2005@gmail.com",
    href: "mailto:vageeshgn2005@gmail.com",
    icon: <FaEnvelope />,
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-24 px-6 flex justify-center bg-gradient-to-b from-transparent to-slate-900 text-slate-800"
    >
      <div className="max-w-2xl w-full bg-white border border-slate-300 rounded-2xl shadow-md p-8 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-slate-600">
            Whether it's a collaboration, opportunity, or just a friendly chat —
            my inbox is open!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
            >
              <span className="text-xl text-slate-600">{link.icon}</span>
              <div className="text-left">
                <p className="text-sm font-medium">{link.label}</p>
                <p className="text-xs text-slate-500">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-6">
          No spam, no bots - just genuine connections
        </p>
      </div>
    </div>
  );
};

export default Contact;
