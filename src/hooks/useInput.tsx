import { useState } from 'react';
import { ChangeEvent } from 'react';

export const useInput = (validateValue: (value: string) => {}, initialState: string) => {
	const [inputValue, setInputValue] = useState(initialState);
	const [isInputTouched, setIsInputTouched] = useState(false);

	const isInputValid = validateValue(inputValue);

	const inputValueHnalder = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const inputBlurHandler = () => {
		setIsInputTouched(true);
	};

	return {
		inputValue,
		isInputValid,
		isInputTouched,
		inputValueHnalder,
		inputBlurHandler,
	};
};
