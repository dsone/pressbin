import { NavLink } from "@solidjs/router";
import Link from "~/components/Link";


export default function About() {

	return (
		<main class="text-center mx-auto p-4">
			<h1 class="max-6-xs text-6xl text-main-100 font-thin uppercase mt-16">
				About Page
			</h1>

			<p class="mt-8">
				Minimalistic pastebin for sharing text via hash rather than a link to a website storing your data.<br />
				The only limitation is the size of the hash, which is "limited to 4,194,304 characters" ...according to Copilot.<br />
			</p>
			<p class="mt-2">
				<strong>Use at your own risk.</strong>
			</p>

			<h3 class="mt-4 text-xl font-bold">Why?</h3>
			<p>
				Trying out solid-start, feasability of using a hash for storing data.<br /> 
				Stepping stone for something more complex in the future if we'd be living in an ideal world without other responsibilities.
			</p>

			<p class="mt-8">
				Created with <Link href="https://github.com/pieroxy/lz-string/" blank>lz-string</Link> and <Link href="https://start.solidjs.com/" blank>solid-start</Link>.
			</p>
			<p>
				Favicon by <Link href="https://www.flaticon.com/free-icons/printing-press" title="printing-press icons" blank>Printing-press icon created by Flat Icons - Flaticon</Link>
			</p>

			<p class="my-4">
				<NavLink href="/" class="underline hover:text-main-200 transition-all duration-300">Home</NavLink>
				{" - "}
				<span>About</span>
			</p>
		</main>
	);

}
