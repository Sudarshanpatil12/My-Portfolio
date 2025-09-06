import classNames from "classnames";
import { Mail, Phone } from "lucide-react"; // icons for email & phone
import styles from "../style";

const CTA = () => (
  <section
    id="contact"
    className={classNames(
      "relative w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden",
      styles.marginY
    )}
  >
    <div className="max-w-4xl mx-auto flex flex-col gap-10 p-10 sm:p-16 items-center text-center">
      {/* Heading */}
      <div className={classNames(styles.heading4, "text-center")}>
        Get In Touch
        <span className="block font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          I’d love to hear from you!
        </span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
        {/* Email */}
        <a
          href="mailto:sudarshanpatil329@gmail.com"
          className="flex items-center gap-3 text-lg font-semibold text-blue-300 hover:text-blue-400 hover:underline transition-all duration-200"
        >
          <Mail className="w-5 h-5" />
          sudarshanpatil329@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+919522876912"
          className="flex items-center gap-3 text-lg font-semibold text-blue-300 hover:text-blue-400 hover:underline transition-all duration-200"
        >
          <Phone className="w-5 h-5" />
          +91 9522876912
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
