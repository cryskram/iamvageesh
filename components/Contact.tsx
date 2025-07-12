"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-24 px-6 flex justify-center bg-gradient-to-b from-transparent to-slate-900 text-slate-800"
    >
      <motion.div
        className="max-w-2xl w-full bg-white border border-slate-300 rounded-2xl shadow-md p-8 space-y-8 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={fadeUp}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-slate-600">
            Whether it's a collaboration, opportunity, or just a friendly chat —
            my inbox is open!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
              variants={fadeUp}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="text-xl text-slate-600">{link.icon}</span>
              <div className="text-left">
                <p className="text-sm font-medium">{link.label}</p>
                <p className="text-xs text-slate-500">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="text-xs text-slate-400 mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + links.length * 0.1 }}
        >
          No spam, no bots – just genuine connections
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
