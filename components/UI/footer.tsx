import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto my-8 max-w-5xl px-4 text-base md:text-lg lg:text-xl">
      <Link href="https://discord.gg/N5cNNCbmPu" target={"_blank"} className="hover:underline">
        DesakuLab
      </Link>{" "}
      © {year}
    </footer>
  );
}
