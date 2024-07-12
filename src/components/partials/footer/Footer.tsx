import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between"></div>

      <div className="grid grid-cols-1 gap-8   sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
        <div>
          <p className="font-medium text-white-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                1on1 Coaching{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Company Review{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Accounts Review{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                HR Consulting{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                SEO Optimisation{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                About{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Meet the Team{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Accounts Review{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Contact{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                FAQs{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Live Chat{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Accessibility{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Returns Policy{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Refund Policy{" "}
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white transition hover:opacity-75">
                {" "}
                Hiring Statistics{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        &copy; 2022. Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
