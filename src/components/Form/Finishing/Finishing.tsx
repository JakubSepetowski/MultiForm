import { Header } from '../../UI/Header';
import { UserContex } from '../../../store/userInfo';
import { useContext, useState } from 'react';

type Props = {
	onGoToPlan: () => void;
};

const plans = ['Aracde', 'Advanced', 'Pro'];
const addonsNames = ['Online service', 'Large store', 'Customizable profile'];
const addonsPrice = [1, 2, 2];

export const Finishing = (props: Props) => {
	const { plan, planPrice, monthyPlan, addOns, addOnsPrice } = useContext(UserContex);

	const choosenPlan = plans.filter((_, i) => i + 1 === plan);

	const goToPlanHandler = () => {
		props.onGoToPlan();
	};

	const choosenAddons: boolean[] = [];
	for (const [_, value] of Object.entries(addOns)) {
		choosenAddons.push(value);
	}

	return (
		<div className='h-full'>
			<Header title='Finishing up' desc='Double-check everything looks OK before confirming' />
			<div className='w-full bg-my-blue-100 p-4 mt-4 xsm:mt-8 md:mt-10 rounded-md text-sm xsm:text-base'>
				<div className='flex justify-between border-b-2 pb-4'>
					<div>
						<h4 className='text-blue-900'>
							{choosenPlan} <span>{monthyPlan ? '(Monhly)' : '(Yearly)'}</span>
						</h4>
						<button onClick={goToPlanHandler} className='underline text-blue-700 mt-1'>
							Change
						</button>
					</div>
					<p>+${`${planPrice} ${monthyPlan ? '/mo' : '/yr'}`}</p>
				</div>
				{choosenAddons.map(
					(addon, i) =>
						addon && (
							<div key={i} className='flex justify-between mt-4 text-neutral-500'>
								<p>{addonsNames[i]}</p>
								<p>+${monthyPlan ? `${addonsPrice[i]}/mo` : `${addonsPrice[i] * 10}/yr`}</p>
							</div>
						)
				)}
			</div>
			<div className='flex w-full justify-between items-center p-4 mt-2'>
				<p className='text-base xsm:text-lg'>
					Total <span>{monthyPlan ? '(per month)' : '(per year)'}</span>
				</p>
				<p className='font-bold text-blue-700 text-lg xsm:text-2xl'>
					{`$${planPrice + addOnsPrice} ${monthyPlan ? '/mo' : '/yr'}`}
				</p>
			</div>
		</div>
	);
};
