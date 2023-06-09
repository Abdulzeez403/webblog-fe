import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className=" bg-black py-[4rem] mx-auto">
      <div className=" block w-[80%] mx-auto md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center">
        <div>
          <nav className="text-center">
            <h4 className="text-white font-extrabold text-[1.3rem]">
              Job Seeker
            </h4>
            <ul className="my-2">
              <li>
                <Link href="/">
                  <h4 className="text-white ">Create a Resume</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Sample</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Cover Letter Sample</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="text-center ">
            <h4 className="text-white font-extrabold text-[1.3rem]">
              Resources
            </h4>
            <ul className="my-2 ">
              <li>
                <Link href="/">
                  <h4 className="text-white my-1"> Career Advice</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1">Resume</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white  my-1">Career Development</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white  my-1">Getting a Job</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1">Cover Letters</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white my-1 ">Interviewing</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="text-center ">
            <h4 className="text-white font-extrabold text-[1.3rem]">
              Need Help?
            </h4>
            <ul className="my-2">
              <li>
                <Link href="/">
                  <h4 className="text-white ">Help Center</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white ">About Us</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Contact Us</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Contributor</h4>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <h4 className="text-white">Sitemap</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center ">
          <h4 className="text-white font-extrabold text-[1.3rem]">
            Stay Connected
          </h4>
          <div className="flex justify-center gap-x-4">
            <BsInstagram color="white" size={25} />
            <BsTwitter color="white" size={25} />
            <BsLinkedin color="white" size={25} />
            <BsFacebook color="white" size={25} />
          </div>
          <div></div>
        </div>
      </div>

      <div className="text-center text-white pt-10">
        <h4>
          <span className="font-extrabold">Copyright</span> {"/U+00A9"}
          {new Date().getFullYear()}
        </h4>
      </div>
    </div>
  );
};
