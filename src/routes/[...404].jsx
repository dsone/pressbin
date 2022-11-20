import { NavLink } from "@solidjs/router";

export default function NotFound() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-main-100 font-thin uppercase mt-16">
				Not Found
			</h1>

			<p class="mt-8 text-main-100">
				The page you are looking for does not exist.<br />
			</p>

			<p class="mt-4 text-main-100">
				<NavLink href="/" class="underline hover:text-main-200 transition-all duration-300">Go Home</NavLink>
			</p>
		</main>
	);
}
