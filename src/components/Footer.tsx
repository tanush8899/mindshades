import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  // TODO: replace with real links
  const email = "mailto:roshsj6@gmail.com";
  const whatsapp = "https://wa.me/+919840724887";
  const instagram = "https://instagram.com/roshna_mindshades";

  const base =
    "inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5 active:scale-[0.98] transition";

  return (
    <footer className="mt-16">
      <div className="w-full px-2 sm:px-3 md:px-4 py-12 text-center">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a aria-label="Email" href={email} className={base}>
            <MdEmail size={26} color="black" />
          </a>
          <a aria-label="WhatsApp" href={whatsapp} target="_blank" rel="noreferrer" className={base}>
            <FaWhatsapp size={26} color="black" />
          </a>
          <a aria-label="Instagram" href={instagram} target="_blank" rel="noreferrer" className={base}>
            <FaInstagram size={26} color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
