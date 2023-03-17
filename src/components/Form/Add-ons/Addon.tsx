import checkIcon from '../../../assets/imgs/icon-checkmark.svg';
import { UserContex } from '../../../store/userInfo';
import { useContext } from 'react';

interface Props {
	id: number;
	title: string;
	desc: string;
	price: number;
	onSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Addon = (props: Props) => {
	const { addOns, monthyPlan } = useContext(UserContex);
	const { onlineService, largStore, CustomProfile } = addOns;

	let currentAddon = 1;
	let currentIsChcked = onlineService;
	if (props.id === 2) {
		currentAddon = 2;
		currentIsChcked = largStore;
	}

	if (props.id === 3) {
		currentAddon = 3;
		currentIsChcked = CustomProfile;
	}
	return (
		<div
			onClick={props.onSelect}
			data-id={props.id}
			className={`flex w-full justify-between items-center p-3 pl-3 pr-3 border rounded-md cursor-pointer mt-4 xsm:p-4 ${
				props.id === currentAddon && currentIsChcked ? 'bg-my-blue-100' : 'bg-white'
			}`}>
			<div className='flex items-center pointer-events-none'>
				<div
					className={`transition-colors duration-300 h-5 w-5 rounded-md p-1 flex items-center justify-center pointer-events-none ${
						props.id === currentAddon && currentIsChcked ? 'bg-blue-700' : 'bg-white border'
					} `}>
					{props.id === currentAddon && currentIsChcked && (
						<img className='w-11/12 pointer-events-none' src={checkIcon} alt='check icon' />
					)}
				</div>
				<div className='ml-4 pointer-events-none'>
					<h4 className='font-bold text-blue-900 pointer-events-none'>{props.title}</h4>
					<p className='text-xs xsm:text-sm text-neutral-500 pointer-events-none'>{props.desc}</p>
				</div>
			</div>
			<p className='text-blue-700 pointer-events-none'>
				+${monthyPlan ? `${props.price}/mo` : `${props.price * 10}/yr`}
			</p>
		</div>
	);
};
