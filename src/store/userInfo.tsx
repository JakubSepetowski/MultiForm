import React from 'react';

const initialState = {
	name: '',
	email: '',
	phoneNumber: '',
	plan: 0,
	monthyPlan: true,
	addOns: {
		onlineService: true,
		largStore: false,
		CustomProfile: false,
	},
	step1IsValid: false,
	step2IsValid: false,
	step3IsValid: false,

	setName: (name: string) => {},
	setEmail: (email: string) => {},
	setPhoneNumber: (phoneNumber: string) => {},
	setPlan: (planId: number) => {},
	changeMonthlyPlan: () => {},
	setAddons: (id: number) => {},
	setStep1IsValid: (valid: boolean) => {},
	setStep2IsValid: (valid: boolean) => {},
	setStep3IsValid: (valid: boolean) => {},
};

export const UserContex = React.createContext(initialState);
