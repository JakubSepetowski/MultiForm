import { Header } from '../../UI/Header';
import arcadeIcon from '../../../assets/imgs/icon-arcade.svg';
import advanceIcon from '../../../assets/imgs/icon-advanced.svg';
import proIcon from '../../../assets/imgs/icon-pro.svg';
import { useContext } from 'react';
import { UserContex } from '../../../store/userInfo';
import { PlanItem } from './PlanItem';

const plans = [
	{
		id: '1',
		title: 'Arcade',
		price: {
			monthly: '$9/mo',
			yearly: '$90/mo',
		},

		icon: arcadeIcon,
	},
	{
		id: '2',
		title: 'Advanced',
		price:{
			monthly: '$12/mo',
			yearly: '$120/mo'

		},
		icon: advanceIcon,
	},
	{
		id: '3',
		title: 'Pro',
		price:{
			monthly: '$15/mo',
			yearly: '$150/mo'

		},
		icon: proIcon,
	},
];

export const Plan = () => {
	const { setPlan, changeMonthlyPlan, monthyPlan, setStep2IsValid } = useContext(UserContex);
	const onSelectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const attribute = target.getAttribute('data-id');
		setPlan(Number(attribute));
		setStep2IsValid(true);
	};
	const onChangePaymentHanlder = () => {
		changeMonthlyPlan();
	};
	return (
		<form className='h-full'>
			<Header title='Select your plan' desc='You have the option of monthly or yearly biling.' />
			<div className='text-sm xsm:text-base md:flex w-full md:justify-between md:mt-8'>
				{plans.map((plan) => (
					<PlanItem
						onSelect={onSelectHandler}
						key={plan.id}
						id={plan.id}
						title={plan.title}
						price={plan.price}
						icon={plan.icon}
					/>
				))}
			</div>
			<div className='flex items-center bg-my-blue-100 justify-center  mt-4 p-2 rounded-md md:mt-8 md:p-3'>
				<p className={`${monthyPlan ? 'text-blue-900' : ' text-neutral-500'}`}>Monthly</p>
				<input
					onChange={onChangePaymentHanlder}
					className='ml-3 mr-3 appearance-none switch'
					type='checkbox'
					checked={!monthyPlan}
				/>
				<p className={`${!monthyPlan ? 'text-blue-900' : ' text-neutral-500'}`}>Yearly</p>
			</div>
		</form>
	);
};
