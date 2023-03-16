import React from 'react';

const initialState = {
	name: '',
	email: '',
	phoneNumber: '',
	plan: 1,
	monthyPlan: true,
	addOns: {
		onlineService: true,
		largStore: false,
		CustomProfile: false,
	},

	setName: (name: string) => {},
	setEmail: (email: string) => {},
	setPhoneNumber: (phoneNumber: string) => {},
	setPlan: (planId: number) => {},
	changeMonthlyPlan: () => {},
	setAddons: (id: number) => {},
};

export const UserContex= React.createContext(initialState);
