// @refresh reload
import { NavLink } from "@solidjs/router";
import { createSignal, Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

import "./root.css";


export default function Root() {

	let [ title, setTitle ] = createSignal('Pressbin');
	globalThis.setTitle = setTitle;

	return (
		<Html lang="en">
			<Head>
				<Title>{ title() }</Title>
				<Meta charset="utf-8" />
				<Meta name="theme-color" content="#ffffff" />
				<Meta name="msapplication-TileColor" content="#517486" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#517486" />
			</Head>
			<Body class="w-full p-0 m-0 overflow-x-hidden overflow-y-scroll bg-main-400 text-main-100 text-lg">
				<Suspense>
					<ErrorBoundary>
						<div class="flex flex-row justify-center">
							<NavLink href="/" class="mr-2 underline hover:text-main-200 transition-all duration-300" activeClass="!no-underline" end>Home</NavLink> -
							<NavLink href="/about" class="mx-2 underline hover:text-main-200 transition-all duration-300" activeClass="!no-underline">About</NavLink>
						</div>

						<Routes>
							<FileRoutes />
						</Routes>

						<div class="fixed bottom-1 right-3 h-8 text-main-100 transition-colors duration-300 hover:text-main-200">
							<div class="text-right">
								<a href="https://github.com/dsone/pressbin" rel="noopener noreferrer" target="_blank">&copy; dsone</a>
							</div>
						</div>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);

}
