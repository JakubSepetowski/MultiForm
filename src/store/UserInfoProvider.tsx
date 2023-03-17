import { UserContex } from './userInfo';
import { useReducer } from 'react';
import { State, Action, ActionTypes } from '../types/types';

type Props = {
	children: React.ReactNode;
};

const InitialUserState: State = {
	name: '',
	email: '',
	phoneNumber: '',
	plan: 0,
	planPrice: 0,
	monthyPlan: true,
	addOns: {
		onlineService: true,
		largStore: false,
		CustomProfile: false,
	},
	addOnsPrice: 1,
	step1IsValid: false,
	step2IsValid: false,
	step3IsValid: true,
};
const userInfoReducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionTypes.name:
			return {
				...state,
				name: action.name,
			};
		case ActionTypes.email:
			return {
				...state,
				email: action.email,
			};
		case ActionTypes.phone:
			return {
				...state,
				phoneNumber: action.number,
			};
		case ActionTypes.plan:
			let amount = 9;
			if (action.id === 2) {
				amount = 12;
			}
			if (action.id === 3) {
				amount = 15;
			}
			if (!state.monthyPlan) amount = amount * 10;
			return {
				...state,
				plan: action.id,
				planPrice: amount,
			};
		case ActionTypes.mthPlan:
			let curentAmount = state.planPrice;
			let currentAddonsAmount = state.addOnsPrice;
			if (state.monthyPlan) {
				curentAmount = curentAmount * 10;
				currentAddonsAmount = currentAddonsAmount * 10;
			} else {
				curentAmount = curentAmount / 10;
				currentAddonsAmount = currentAddonsAmount / 10;
			}
			return {
				...state,
				monthyPlan: !state.monthyPlan,
				planPrice: curentAmount,
				addOnsPrice: currentAddonsAmount,
			};
		case ActionTypes.valid1:
			return {
				...state,
				step1IsValid: action.valid,
			};
		case ActionTypes.valid2:
			return {
				...state,
				step2IsValid: action.valid,
			};

		case ActionTypes.addons: {
			let addonsAmount = state.addOnsPrice;
			if (action.id === 1) {
				if (state.monthyPlan) {
					if (state.addOns.onlineService) addonsAmount = addonsAmount - 1;
					else addonsAmount = addonsAmount + 1;
				} else {
					if (state.addOns.onlineService) addonsAmount = addonsAmount - 10;
					else addonsAmount = addonsAmount + 10;
				}

				return {
					...state,
					addOns: {
						...state.addOns,
						onlineService: !state.addOns.onlineService,
					},
					addOnsPrice: addonsAmount,
				};
			}
			if (action.id === 2) {
				if (state.monthyPlan) {
					if (state.addOns.largStore) addonsAmount = addonsAmount - 2;
					else addonsAmount = addonsAmount + 2;
				} else {
					if (state.addOns.largStore) addonsAmount = addonsAmount - 20;
					else addonsAmount = addonsAmount + 20;
				}

				return {
					...state,
					addOns: {
						...state.addOns,
						largStore: !state.addOns.largStore,
					},
					addOnsPrice: addonsAmount,
				};
			}
			if (action.id === 3) {
				if (state.monthyPlan) {
					if (state.addOns.CustomProfile) addonsAmount = addonsAmount - 2;
					else addonsAmount = addonsAmount + 2;
				} else {
					if (state.addOns.CustomProfile) addonsAmount = addonsAmount - 20;
					else addonsAmount = addonsAmount + 20;
				}

				return {
					...state,
					addOns: {
						...state.addOns,
						CustomProfile: !state.addOns.CustomProfile,
					},
					addOnsPrice: addonsAmount,
				};
			}
		}

		default:
			return state;
	}
};

export const UserInfoProvider = (props: Props) => {
	const [userState, dispatchUserAction] = useReducer(userInfoReducer, InitialUserState);

	const setNameHandler = (name: string) => {
		dispatchUserAction({ type: ActionTypes.name, name });
	};
	const setEmailHandler = (email: string) => {
		dispatchUserAction({ type: ActionTypes.email, email });
	};
	const setPhoneNumberHandler = (phoneNumber: string) => {
		dispatchUserAction({ type: ActionTypes.phone, number: phoneNumber });
	};
	const setPlanHandler = (planId: number) => {
		dispatchUserAction({ type: ActionTypes.plan, id: planId });
	};
	const changeMonthlyPlanHanlder = () => {
		dispatchUserAction({ type: ActionTypes.mthPlan });
	};
	const setAddonsHandler = (id: number) => {
		dispatchUserAction({ type: ActionTypes.addons, id });
	};
	const setStep1IsValidHandler = (valid: boolean) => {
		dispatchUserAction({ type: ActionTypes.valid1, valid });
	};
	const setStep2IsValidHandler = (valid: boolean) => {
		dispatchUserAction({ type: ActionTypes.valid2, valid });
	};

	const userContext = {
		name: userState.name,
		email: userState.email,
		phoneNumber: userState.phoneNumber,
		plan: userState.plan,
		planPrice: userState.planPrice,
		monthyPlan: userState.monthyPlan,
		addOns: userState.addOns,
		addOnsPrice: userState.addOnsPrice,
		step1IsValid: userState.step1IsValid,
		step2IsValid: userState.step2IsValid,
		step3IsValid: userState.step3IsValid,

		setName: setNameHandler,
		setEmail: setEmailHandler,
		setPhoneNumber: setPhoneNumberHandler,
		setPlan: setPlanHandler,
		changeMonthlyPlan: changeMonthlyPlanHanlder,
		setAddons: setAddonsHandler,
		setStep1IsValid: setStep1IsValidHandler,
		setStep2IsValid: setStep2IsValidHandler,
	};

	return <UserContex.Provider value={userContext}>{props.children}</UserContex.Provider>;
};
