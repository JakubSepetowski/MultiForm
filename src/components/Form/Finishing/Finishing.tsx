import { Header } from '../../UI/Header';

export const Finishing = () => {
	return (
		<div className='h-full'>
			<Header title='Finishing up' desc='Double-check everything looks OK before confirming' />
			<div className='w-full bg-my-blue-100 p-4 mt-4 xsm:mt-8 md:mt-10 rounded-md text-sm xsm:text-base'>
				<div className='flex justify-between border-b-2 pb-4'>
					<div>
						<h4 className='text-blue-900'>
							Arcade <span>(Monthly)</span>
						</h4>
						<button className='underline text-blue-700 mt-1'>Change</button>
					</div>
					<p>$9/mo</p>
				</div>
				<div className='flex justify-between mt-4 text-neutral-500'>
					<p>Online service</p>
					<p>+$1/mo</p>
				</div>
				<div className='flex justify-between mt-4 text-neutral-500'>
					<p>Online service</p>
					<p>+$1/mo</p>
				</div>
			</div>
			<div className='flex w-full justify-between items-center p-4 mt-2'>
				<p className='text-base xsm:text-lg'>
					Total <span>(per month)</span>
				</p>
				<p className='font-bold text-blue-700 text-lg xsm:text-2xl'>$12/mo</p>
			</div>
		</div>
	);
};
