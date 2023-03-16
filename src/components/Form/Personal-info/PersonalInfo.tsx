import { Header } from '../../UI/Header';
import { UserContex } from '../../../store/userInfo';
import { ChangeEvent, useContext } from 'react';

export const PersonalInfo = () => {
	const ctx = useContext(UserContex);

	const onNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		ctx.setName(e.target.value);
	};
	const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		ctx.setEmail(e.target.value);
	};
	const onPhoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		ctx.setPhoneNumber(e.target.value);
	};

	return (
		<form className='h-full'>
			<Header
				title='Personal info'
				desc='Please provide your name, email address, and phone number'
			/>
			<div className='mt-4 text-blue-900 text-sm xsm:text-lg xsm:mt-8 md:mt-10'>
				<label htmlFor='name'>Name</label>
				<input
					onChange={onNameChangeHandler}
					value={ctx.name}
					className='w-full p-1 rounded-md border mt-1 pl-2 pr-2'
					type='text'
					id='name'
				/>
			</div>
			<div className='mt-2 text-blue-900 text-sm xsm:text-lg xsm:mt-4'>
				<label htmlFor='email'>Email</label>
				<input
					onChange={onEmailChangeHandler}
					value={ctx.email}
					className='w-full p-1 rounded-md border mt-1 pl-2 pr-2'
					type='text'
					id='emial'
				/>
			</div>
			<div className='mt-2 text-blue-900 text-sm xsm:text-lg xsm:mt-4'>
				<label htmlFor='phone'>Phone Number</label>
				<input
					onChange={onPhoneChangeHandler}
					value={ctx.phoneNumber}
					className='w-full p-1 rounded-md border mt-1 pl-2 pr-2'
					type='text'
					id='phone'
				/>
			</div>
		</form>
	);
};
