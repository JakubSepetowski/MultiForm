interface HeaderProps {
	title: string;
	desc: string;
}

export const Header = (props: HeaderProps) => {
	return (
		<>
			<h1 className='mb-2 text-blue-900 font-bold text-xl xsm:text-3xl md:mt-12'>{props.title}</h1>
			<p className='text-sm text-neutral-500 xsm:text-base xsm:mt-3'>{props.desc}</p>
		</>
	);
};
