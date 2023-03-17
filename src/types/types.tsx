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
	step1IsValid: boolean;
	step2IsValid: boolean;
	step3IsValid: boolean;
}

export enum ActionTypes {
	name = 'NAME',
	email = 'EMAIL',
	phone = 'PHONE',
	plan = 'PLAN',
	mthPlan = 'MONTHLYPLAN',
	addons = 'ADDONS',
	valid1 = 'VALID1',
	valid2 = 'VALID2',
	valid3 = 'VALID3',
}

export type Action =
	| { type: ActionTypes.name; name: string }
	| { type: ActionTypes.email; email: string }
	| { type: ActionTypes.phone; number: string }
	| { type: ActionTypes.plan; id: number }
	| { type: ActionTypes.mthPlan }
	| { type: ActionTypes.addons; id: number }
	| { type: ActionTypes.valid1; valid: boolean }
	| { type: ActionTypes.valid2; valid: boolean }
	| { type: ActionTypes.valid3; valid: boolean };
