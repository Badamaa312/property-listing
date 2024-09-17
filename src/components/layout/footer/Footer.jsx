import { InstaIcon } from "@/components/svg/InstaIcon";
import { MetaIcon } from "@/components/svg/MetaIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <main className="">
      <div className="w-full flex justify-around bg-gray-100 pb-[25px] pt-16">
        <div className="container flex justify-between px-8">
          <div className="">
            <p>About</p>
            <p className="w-[280px] h-[120px] text-wrap pb-3 pt-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="text-lg">
              <p>Email:Badamgarav@nest.edu.mn</p>
              <p>Phone-97699061058</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col  gap-[8px] ">
              <Link href="/">
                <button className="px-2">Home</button>
              </Link>
              <Link href="/blogs">
                <button className="px-2">Blog</button>
              </Link>
              <Link href="/contact-us">
                <button className="px-2">Contact</button>
              </Link>
            </div>
          </div>
          <div className="flex gap-[20px] ">
            {/* <MetaIcon />
            <InstaIcon /> */}
            What's up
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around bg-gray-100 ">
        <div className="container flex justify-between items-center px-8  border w-full h-[0px] border-gray-300 pb-8 pt-8 ">
          <div className="flex">
            {/* <Logo /> */}
            <div className="flex flex-col">
              <p>MetaBlog</p>
              <p>© All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-slate-600">Terms of Use</span>
            <span className="text-sm text-slate-600">Privacy Policy</span>
            <span className="text-sm text-slate-600">Cookie Policy</span>
          </div>
        </div>
      </div>
    </main>
  );
};
