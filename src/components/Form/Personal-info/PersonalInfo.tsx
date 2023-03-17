import { Header } from '../../UI/Header';
import { UserContex } from '../../../store/userInfo';
import { useContext, useEffect } from 'react';
import { useInput } from '../../../hooks/useInput';

export const PersonalInfo = () => {
	const { name, email, phoneNumber, setName, setEmail, setPhoneNumber, setStep1IsValid } =
		useContext(UserContex);

	const {
		inputValue: nameInput,
		isInputValid: isNameValid,
		isInputTouched: isNameTouched,
		inputValueHnalder: nameValueHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value: string) => value.trim() !== '', name);
	const {
		inputValue: emailInput,
		isInputValid: isEmailValid,
		isInputTouched: isEmailTouched,
		inputValueHnalder: emailValueHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput((value: string) => value.includes('@'), email);
	const {
		inputValue: phoneNumberInput,
		isInputValid: isPhoneNumberValid,
		isInputTouched: isPhoneNumberTouched,
		inputValueHnalder: phoneNumberValueHandler,
		inputBlurHandler: phoneNumberBlurHandler,
	} = useInput(
		(value: string) => value.trim().length >= 8 && value.trim().length <= 12,
		phoneNumber
	);

	useEffect(() => {
		if (isNameValid && isEmailValid && isPhoneNumberValid) {
			setStep1IsValid(true);
			setName(nameInput);
			setEmail(emailInput);
			setPhoneNumber(phoneNumberInput);
		} else setStep1IsValid(false);
	}, [isNameValid, isEmailValid, isPhoneNumberValid]);

	return (
		<form className='h-full'>
			<Header
				title='Personal info'
				desc='Please provide your name, email address, and phone number'
			/>
			<div className='mt-4 text-blue-900 text-sm xsm:text-lg xsm:mt-8 md:mt-10'>
				<label htmlFor='name'>Name</label>
				<input
					value={nameInput}
					onChange={nameValueHandler}
					onBlur={nameBlurHandler}
					className={`w-full p-1 rounded-md border mt-1 pl-2 pr-2 ${
						isNameTouched && !isNameValid ? 'bg-red-100' : ''
					} `}
					type='text'
					id='name'
				/>
				{isNameTouched && !isNameValid && (
					<p className='text-xs mt-1  md:text-sm text-my-red'>This field cannot be empty.</p>
				)}
			</div>
			<div className='mt-2 text-blue-900 text-sm xsm:text-lg xsm:mt-4'>
				<label htmlFor='email'>Email</label>
				<input
					onChange={emailValueHandler}
					onBlur={emailBlurHandler}
					value={emailInput}
					className={`w-full p-1 rounded-md border mt-1 pl-2 pr-2 ${
						isEmailTouched && !isEmailValid ? 'bg-red-100' : ''
					} `}
					type='text'
					id='emial'
				/>
				{isEmailTouched && !isEmailValid && (
					<p className='text-xs mt-1 md:text-sm text-my-red'>Email must be valid</p>
				)}
			</div>
			<div className='mt-2 text-blue-900 text-sm xsm:text-lg xsm:mt-4'>
				<label htmlFor='phone'>Phone Number</label>
				<input
					onChange={phoneNumberValueHandler}
					onBlur={phoneNumberBlurHandler}
					value={phoneNumberInput}
					className={`w-full p-1 rounded-md border mt-1 pl-2 pr-2 ${
						isPhoneNumberTouched && !isPhoneNumberValid ? 'bg-red-100' : ''
					} `}
					type='number'
					id='phone'
				/>
				{isPhoneNumberTouched && !isPhoneNumberValid && (
					<p className='text-xs mt-1  md:text-sm text-my-red'>Phone number must be valid</p>
				)}
			</div>
		</form>
	);
};
