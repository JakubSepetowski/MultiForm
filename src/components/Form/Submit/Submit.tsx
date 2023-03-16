import submitIcon from '../../../assets/imgs/icon-thank-you.svg';

export const Submit = () => {
	return (
		<div className='flex flex-col h-full items-center justify-center'>
			<img className='mt-2 w-16 xsm:w-20 md:w-24 md:mt-0' src={submitIcon} alt='submit icon' />
			<h2 className='mt-6 font-bold text-blue-900 text-4xl'>Thank you!</h2>
			<p className='text-center mt-4 text-neutral-500'>
				Thanks for confirming your subscription! We hope you have fun using our platform.If you ever
				need support, please feel free to email us at support@loremgaming.com.
			</p>
		</div>
	);
};
