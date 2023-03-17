import { useContext } from 'react';
import { Header } from '../../UI/Header';
import { Addon } from './Addon';
import { UserContex } from '../../../store/userInfo';

const addonItems = [
	{
		id: 1,
		title: 'Online service',
		desc: 'Access to multiplayer games',
		price: 1,
	},
	{
		id: 2,
		title: 'Large store',
		desc: 'Extra 1TB of colud save',
		price: 2,
	},
	{
		id: 3,
		title: 'Customizable profile',
		desc: 'Custom theme on your profile',
		price: 2,
	},
];

export const AddOns = () => {
	const { setAddons, addOns } = useContext(UserContex);
	const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const attribute = target.getAttribute('data-id');
		setAddons(Number(attribute));
		console.log(addOns);
	};
	return (
		<form className='h-full'>
			<Header title='Pick add-ons' desc='Add-ons help enhance your gaming experience.' />
			<div className='text-sm mt-4 xsm:mt-8 md:mt-10 xsm:text-base'>
				{addonItems.map((item) => (
					<Addon
						key={item.id}
						id={item.id}
						onSelect={selectHandler}
						title={item.title}
						desc={item.desc}
						price={item.price}
					/>
				))}
			</div>
		</form>
	);
};
