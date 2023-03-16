import { useState } from 'react';
import { NavItems } from '../UI/NavItems';
import { AddOns } from './Add-ons/AddOns';
import { Finishing } from './Finishing/Finishing';
import { PersonalInfo } from './Personal-info/PersonalInfo';
import { Plan } from './Plan/Plan';
import { Submit } from './Submit/Submit';

export const Form = () => {
	const [curentStep, setCurrentStep] = useState(1);

	const nextStepHandler = () => {
		if (curentStep < 4) setCurrentStep((prev) => prev + 1);
	};

	const prevStepHandler = () => {
		if (curentStep > 1) setCurrentStep((prev) => prev - 1);
	};
	const submintHanlder = () => {};

	return (
		<main className='md:flex md:items-center md:justify-center md:min-h-screen md:p-4 '>
			<div className='md:bg-white md:p-4 md:rounded-lg  md:flex md:h-[40rem] w-full max-w-4xl h-36 '>
				<NavItems  currStep={curentStep}/>
				<div className='bg-white p-4  min-h-full w-11/12 xsm:pt-8 xsm:pb-8 md:pt-0 md:pb-0 mx-auto mt-[-60px]  md:pl-16 md:pr-16 md:w-4/6  rounded-md md:bg-none md:mx-0 md:rounded-none md:min-h-0 md:mt-0 md:flex md:flex-col'>
					{curentStep === 1 && <PersonalInfo />}
					{curentStep === 2 && <Plan />}
					{curentStep === 3 && <AddOns />}
					{curentStep === 4 && <Finishing />}
					{/* { <Submit />} */}
					<div className='absolute bottom-0 left-0 bg-white p-4 h-20 w-full flex justify-between items-center md:relative md:bg-none md:p-0 md:mt-20 text-sm'>
						{curentStep !== 1 && (
							<button
								onClick={prevStepHandler}
								className=' text-neutral-500 p-4 rounded-md h-8 pl-4 pr-4 flex items-center xsm:text-base xsm:h-9    md:h-10 md:pl-4 md:pr-4 '>
								Go Back
							</button>
						)}
						{curentStep !== 4 && (
							<button
								onClick={nextStepHandler}
								className='bg-my-blu-400 text-white p-4 rounded-md h-8 pl-4 pr-4 flex items-center xsm:text-base xsm:h-9   md:h-10 md:pl-4 md:pr-4 ml-auto '>
								Next Step
							</button>
						)}
						{curentStep === 4 && (
							<button
								onClick={submintHanlder}
								className='bg-my-blu-400 text-white p-4 rounded-md h-8 pl-4 pr-4 flex items-center xsm:text-base xsm:h-9   md:h-10 md:pl-4 md:pr-4 ml-auto '>
								Confirm
							</button>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};
