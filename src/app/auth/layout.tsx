import Image from "next/image";
import BackgroundImage from "../../../public/images/background.jpg";
import Logo from "../../../public/images/logonetflix.png";
import Link from "next/link";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="Background image"
        className="hidden sm:flex sm:object-over -z-10 brightness-50"
        priority
        fill
      />
      <Link href="/">
        <Image
          src={Logo}
          alt="Logonetnetflix image"
          width={120}
          height={120}
          className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
          priority
        />
      </Link>
      {children}
    </div>
  );
}
