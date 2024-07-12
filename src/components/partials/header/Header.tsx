import Image from "next/image";
import React from "react";
import Logo from "../../../../public/images/logonetflix.png";
import BackgroundImage from "../../../../public/images/background.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SelectComp from "@/components/Select/Select";

const Header = () => {
  return (
    <div className="relative flex h-1/2 w-screen flex-col md:items-center md:justify-center md:bg-transparent z-50">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logonetnetflix image"
          width={120}
          height={120}
          className="absolute left-10 top-4 object-contain md:left-40 md:top-6"
          priority
        />
      </Link>
      <Link href="/auth/login">
        <Button
          variant="destructive"
          className="absolute right-10 top-4 object-contain md:right-40 md:top-6 bg-[#E50815]"
        >
          S&apos;identifer
        </Button>
      </Link>
      <div className="absolute right-36 top-4 object-contain md:right-72 md:top-6">
        <SelectComp />
      </div>
    </div>
  );
};

export default Header;
