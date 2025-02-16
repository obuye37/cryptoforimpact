import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/c4iLogo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 p-2" aria-label="Cruip">
      <Image src={logo} alt="C4i Logo" width={80} height={32} />
    </Link>
  );
}
