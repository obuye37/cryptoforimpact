import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-4 sm:px-6" inert>
        {/* Footer illustration */}
        <div
          className="pointer-events-none"
          aria-hidden="true"
        >
          #Crypto for Impact
        </div>
        <div
          className="pointer-events-none"
          aria-hidden="true"
        >
          &copy; C4i 2025
        </div>
      </div>
    </footer>
  );
}
