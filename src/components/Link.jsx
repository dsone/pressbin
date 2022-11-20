import { A } from "solid-start";

export default function Link(props) {

	return (
		<A 
			href={ props.href } 
			class={ `text-main-200 hover:text-main-100 transition-all duration-200 underline${ !!props.class ? ` ${ props.class }` : ''}` }
			rel="noopener noreferrer" target={ !!props.blank ? "_blank" : '_self' }
			title={ !!props.title ? props.title : '' }
		>
			{ props.children }
		</A>
	);

}