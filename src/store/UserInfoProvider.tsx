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
	monthyPlan: true,
	addOns: {
		onlineService: true,
		largStore: false,
		CustomProfile: false,
	},
	step1IsValid: false,
	step2IsValid: false,
	step3IsValid: false,
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
			return {
				...state,
				plan: action.id,
			};
		case ActionTypes.mthPlan:
			return {
				...state,
				monthyPlan: !state.monthyPlan,
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
		case ActionTypes.valid3:
			return {
				...state,
				step3IsValid: action.valid,
			};
		case ActionTypes.addons: {
			if (action.id === 1)
				return {
					...state,
					addOns: {
						...state.addOns,
						onlineService: !state.addOns.CustomProfile,
					},
				};
			if (action.id === 2)
				return {
					...state,
					addOns: {
						...state.addOns,
						largStore: !state.addOns.largStore,
					},
				};
			if (action.id === 3)
				return {
					...state,
					addOns: {
						...state.addOns,
						CustomProfile: !state.addOns.CustomProfile,
					},
				};
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
	const setStep3IsValidHandler = (valid: boolean) => {
		dispatchUserAction({ type: ActionTypes.valid3, valid });
	};

	const userContext = {
		name: userState.name,
		email: userState.email,
		phoneNumber: userState.phoneNumber,
		plan: userState.plan,
		monthyPlan: userState.monthyPlan,
		addOns: userState.addOns,
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
		setStep3IsValid: setStep3IsValidHandler,
	};

	return <UserContex.Provider value={userContext}>{props.children}</UserContex.Provider>;
};
