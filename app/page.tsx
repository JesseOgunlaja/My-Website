import Link from "next/link";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="page">
			<Navbar />
			<Main />
		</div>
	);
}
