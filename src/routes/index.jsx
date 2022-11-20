import { createEffect, createSignal, onMount, Show } from "solid-js";
import LZString from '../utilities/LZString';


export default function Home() {

	const [ notice, setNotice ] = createSignal(null);
	const [ text, setText ] = createSignal('');
	createEffect(() => {
		if (text().length > 0) {
			setTitle(`Pressbin - ${ text().length } chars / ${ (LZString.compressToEncodedURIComponent(text())).length } hash`);
		} else {
			setTitle('Pressbin');
		}
	});

	onMount(() => {
		if (location.hash.length > 1) {
			try {
				setText(LZString.decompressFromEncodedURIComponent(location.hash.substring(1)));
			} catch (e) {
				setText(e);
			}
		}
	});

	let toNotice = null;
	const shareText = e => {
		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state == "granted" || result.state == "prompt") {
				let compressedCSV = LZString.compressToEncodedURIComponent(text());
				navigator.clipboard.writeText(`${ location.origin }#${ compressedCSV }`);
				setNotice('Copied link to clipboard!');

				clearTimeout(toNotice);
				toNotice = setTimeout(() => setNotice(null), 3000);
			}
		});
	};

	return (
		<main class="text-center mx-auto p-4 max-w-[80%] xl:max-w-[50%]">
			<Show when={ notice() }>
				<div 
					class="px-4 py-3 fixed top-4 left-4 bg-teal-300 hover:bg-teal-400 border-t-4 border-teal-600 hover:border-teal-700 cursor-pointer transition-all duration-200  rounded-b text-teal-900 shadow-md" 
					role="alert" onClick={ e => setNotice(null) }
				>
					<div class="flex">
						<div class="py-1"><svg class="fill-current h-6 w-6 text-teal-900 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
						<div>
							<p class="font-bold">{ notice() }</p>
						</div>
					</div>
				</div>
			</Show>

			<h1 class="max-6-xs text-6xl text-main-100 font-thin uppercase my-16">
				Pressbin
			</h1>
			
			<div class="relative">
				<pre class="whitespace-pre-wrap min-h-[180px]" style="word-wrap: break-word" innerHTML={ text().replace(/\n/g, '<br />') }></pre><br />

				<textarea 
					class="px-2 py-1 absolute top-0 left-0 w-full min-h-[180px] h-full text-black placeholder-main-100 focus:outline-none bg-main-300 shadow-md rounded resize-none overflow-y-hidden" 
					value={ text() } onKeyup={ e => setText(e.target.value) }
					placeholder="Type here..."
				/>
			</div>

			<div class="flex flex-row justify-between sticky bottom-4 mt-4 px-2">
				<button 
					class="px-4 py-2 transition-all duration-200 text-main-100 font-semibold rounded shadow-md" 
					onClick={ (e) => setText('') }
					classList={{
						'opacity-0 cursor-not-allowed': text().length === 0,
						'opacity-100 bg-red-700 hover:bg-red-800': text().length > 0,
					}}
					disabled={ text().length === 0 }
				>
					Clear
				</button>
				<span class="px-2 mt-2 h-7 flex items-center bg-main-400 rounded">{ text().length > 4 ? `${ text().length } chars` : '' }</span>
				<button 
					class="px-4 py-2 transition-all duration-200 text-main-100 font-semibold rounded shadow-md" 
					onClick={ (e) => shareText(e) }
					classList={{
						'opacity-0 cursor-not-allowed': text().length === 0,
						'opacity-100 bg-green-700 hover:bg-green-800': text().length > 0,
					}}
					disabled={ text().length === 0 }
				>
					Share
				</button>
			</div>
			<div class="mt-10 text-sm text-main-100">
				No data is stored on the server. The data is stored purely in the URL hash.<br />
				No cookies, no tracking.
			</div>
		</main>
	);

}
