import { NavItem } from './NavItem';

const navInfo = [
	{
		id: 1,
		title: 'step 1',
		desc: 'your info',
	},
	{
		id: 2,
		title: 'step 2',
		desc: 'select plan',
	},
	{
		id: 3,
		title: 'step 3',
		desc: 'add-ons',
	},
	{
		id: 4,
		title: 'step 4',
		desc: 'summary',
	},
];

export const NavItems = (props: { currStep: number }) => {
	return (
		<div className='bgc-img w-full h-full flex justify-center items-start pt-7  md:flex-col md:justify-start md:pt-0  md:p-4 md:w-2/6 '>
			{navInfo.map((info) => {
				return <NavItem key={info.id} id={info.id} title={info.title} desc={info.desc} step={props.currStep} />;
			})}
		</div>
	);
};
