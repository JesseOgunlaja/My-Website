import About from "@/components/About";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Main />
      <About />
      <p>Looking for a Fullstack Developer?</p>
      <Link href="mailto:jesse@jesseogunlaja.com">Get in touch</Link>
    </div>
  );
}
