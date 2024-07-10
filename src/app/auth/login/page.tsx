import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Se connecter</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Connexion
          </Button>
        </div>
      </form>
      <div>
        <p className="text-sm text-gray-400 mt-2">
          Pas de compte ?{" "}
          <Link href="/auth/register" className="text-white  hover:underline">
            S&apos;enregistrer
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
