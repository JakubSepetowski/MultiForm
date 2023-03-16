export interface State {
	name: string;
	email: string;
	phoneNumber: string;
	plan: number;
	monthyPlan: boolean;
	addOns: {
		onlineService: boolean;
		largStore: boolean;
		CustomProfile: boolean;
	};
}
export enum ActionTypes {
	name = 'NAME',
	email = 'EMAIL',
	phone = 'PHONE',
	plan = 'PLAN',
	mthPlan = 'MONTHLYPLAN',
	addons = 'ADDONS',
}

export type Action =
	| { type: ActionTypes.name; name: string }
	| { type: ActionTypes.email; email: string }
	| { type: ActionTypes.phone; number: string }
	| { type: ActionTypes.plan; id: number }
	| { type: ActionTypes.mthPlan }
	| { type: ActionTypes.addons; id: number };
