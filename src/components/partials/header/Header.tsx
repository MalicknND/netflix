import Image from "next/image";
import React from "react";
import Logo from "../../../../public/images/logonetflix.png";
import BackgroundImage from "../../../../public/images/background.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="relative flex h-1/2 w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      {/* <Image
        src={BackgroundImage}
        alt="Background image"
        className="hidden sm:flex sm:object-over -z-10 brightness-50"
        priority
        fill
      /> */}
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
      <Link href="/auth/login">
        <Button
          variant="destructive"
          className="absolute right-4 top-4 object-contain md:right-10 md:top-6"
        >
          Connecter
        </Button>
      </Link>
    </div>
  );
};

export default Header;
