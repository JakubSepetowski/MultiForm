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
	plan: 1,
	monthyPlan: true,
	addOns: {
		onlineService: true,
		largStore: false,
		CustomProfile: false,
	},
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
	const setAddons = (id: number) => {
		dispatchUserAction({ type: ActionTypes.addons, id });
	};

	const userContext = {
		name: userState.name,
		email: userState.email,
		phoneNumber: userState.phoneNumber,
		plan: userState.plan,
		monthyPlan: userState.monthyPlan,
		addOns: userState.addOns,

		setName: setNameHandler,
		setEmail: setEmailHandler,
		setPhoneNumber: setPhoneNumberHandler,
		setPlan: setPlanHandler,
		changeMonthlyPlan: changeMonthlyPlanHanlder,
		setAddons: setAddons,
	};

	return <UserContex.Provider value={userContext}>{props.children}</UserContex.Provider>;
};
