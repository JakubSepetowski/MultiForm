import { useContext } from 'react';
import { UserContex } from '../../../store/userInfo';

interface Props {
	id: string;
	title: string;
	price: string;
	icon: string;
	onSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const PlanItem = (props: Props) => {
	const { plan } = useContext(UserContex);
	return (
		<div
			onClick={props.onSelect}
			data-id={props.id}
			className={`flex border rounded-md mt-4 p-2 cursor-pointer md:flex-col md:h-44 md:w-36 md:justify-between md:p-4 ${
				Number(props.id) === plan ? 'bg-my-blue-100' : 'bg-white'
			} `}>
			<img className='md:w-12 pointer-events-none' src={props.icon} alt={`${props.title} icon`} />
			<div className='ml-4 md:ml-0 pointer-events-none'>
				<h4 className='text-blue-900 font-bold'>{props.title}</h4>
				<p className='text-neutral-500'>{props.price}</p>
			</div>
		</div>
	);
};
