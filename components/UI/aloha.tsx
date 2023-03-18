import Link from "next/link";
import Image from "next/image";
import {
  AiFillInstagram as Insta,
  AiFillTwitterCircle as Twitter,
} from "react-icons/ai";

const social = {
  Instagram: `https://instagram.com/supg_id`,
  Twitter: `https://twitter.com/supg_id`
};

export default function Aloha() {
  return (
    <div className="md:flex">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl md:text-[text-4rem] lg:text-[5.5rem] lg:leading-none">
          welcome to <br />{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            supg
          </span>
        </h2>
        <div className="my-8 flex">
          <Link
            href={social?.Instagram}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#1DA1F2]"
          >
            {" "}
            <Insta size={40} title="instagram" className="hover:text-rose-600" />
          </Link>
          <Link
            href={social?.Twitter}
            rel="noreferrer"
            target="_blank"
            className="hover:text-[#1DA1F2]"
          >
            {" "}
            <Twitter size={40} title="instagram" className="hover:text-rose-600" />
          </Link>
        </div>
      </div>
      <div className="ml-auto">
        {/* <Image
          src={image}
          alt="James Reagan"
          width={288}
          height={288}
          priority
          style={{ borderRadius: "100%" }}
        /> */}
        {/* <iframe style={{ borderRadius: "10px" }} className="my-3" width="560" height="315" src="https://www.youtube.com/embed/phXrE72SCbI" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      </div>
    </div>
  );
}
