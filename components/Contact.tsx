import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const links = [
  {
    label: "github.com/vageeshgn",
    href: "https://github.com/vageeshgn",
    icon: <FaGithub />,
  },
  {
    label: "linkedin.com/in/vageeshgn",
    href: "https://linkedin.com/in/vageeshgn",
    icon: <FaLinkedin />,
  },
  {
    label: "twitter.com/vageeshgn",
    href: "https://twitter.com/vageeshgn",
    icon: <FaTwitter />,
  },
  {
    label: "vageeshgn@example.com",
    href: "mailto:vageeshgn@example.com",
    icon: <FaEnvelope />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 flex justify-center bg-slate-900 text-slate-100"
    >
      <div className="max-w-3xl w-full font-mono text-sm space-y-4">
        <p className="text-lime-400">$ whoami</p>
        <p className="text-slate-200">&gt; vageeshgn</p>

        <p className="text-lime-400 mt-6">$ socials</p>
        <div className="space-y-2">
          {links.map((link, i) => (
            <p key={i} className="flex items-center gap-2">
              <span className="text-slate-200">&gt;</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400 flex items-center gap-2"
              >
                {link.icon} {link.label}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
