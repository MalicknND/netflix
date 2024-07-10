import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../../public/images/google.svg";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">
          S&apos;enregistrer
        </h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Créer un compte
          </Button>
        </div>
      </form>
      <div>
        <p className="text-sm text-gray-400 mt-2">
          Vous avez déjà un compte?{" "}
          <Link href="/auth/login" className="text-white  hover:underline">
            Connexion
          </Link>
        </p>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <GithubIcon size={24} />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="Google" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
};

export default Page;
