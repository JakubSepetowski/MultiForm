interface NavItemProps {
	id: number;
	title: string;
	desc: string;
	step: number;
}

export const NavItem = (props: NavItemProps) => {
	return (
		<div className='ml-2 mr-2 p-1 md:flex md:items-center md:mt-5'>
			<span
				className={` p-2 rounded-full w-8 h-8 flex justify-center items-center md:h-10 md:w-10 transition-colors duration-300  ${
					props.step === props.id ? 'curr-item' : 'not-curr-item'
				}   `}>
				{props.id}
			</span>
			<div className='hidden md:block md:ml-6'>
				<h3 className='uppercase text-neutral-300'>{props.title}</h3>
				<p className='uppercase text-white font-bold'>{props.desc}</p>
			</div>
		</div>
	);
};
