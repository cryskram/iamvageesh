"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  {
    label: "GitHub",
    value: "cryskram",
    href: "https://github.com/cryskram",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    value: "vageeshgn",
    href: "https://linkedin.com/in/vageeshgn",
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    label: "Instagram",
    value: "vageesh404",
    href: "https://instagram.com/vageesh404",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "X / Twitter",
    value: "gn_vageesh",
    href: "https://x.com/gn_vageesh",
    icon: <FaXTwitter aria-hidden="true" />,
  },
  {
    label: "Email",
    value: "vageeshgn2005@gmail.com",
    href: "mailto:vageeshgn2005@gmail.com",
    icon: <FaEnvelope aria-hidden="true" />,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const fast = prefersReducedMotion ? { duration: 0, delay: 0 } : {};

  return (
    <div
      id="contact"
      className="flex w-full justify-center bg-gradient-to-b from-transparent to-slate-900 px-6 py-24 text-slate-800 dark:to-slate-950 dark:text-slate-200"
    >
      <motion.div
        className="w-full max-w-2xl space-y-8 rounded-2xl border border-slate-300 bg-white p-8 text-center shadow-md dark:border-slate-700 dark:bg-slate-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ...fast }}
        variants={fadeUp}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ...fast }}
        >
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Whether it&apos;s a collaboration, opportunity, or just a friendly chat -
            my inbox is open!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
              className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              variants={fadeUp}
              transition={{ delay: 0.3 + i * 0.1, ...fast }}
              aria-label={`${link.label}: ${link.value}`}
            >
              <span className="text-xl text-slate-600 dark:text-slate-400">{link.icon}</span>
              <div className="text-left">
                <p className="text-sm font-medium">{link.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + links.length * 0.1 }}
        >
          No spam, no bots - just genuine connections
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
