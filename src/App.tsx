import { Form } from './/components/Form/Form';
import { UserInfoProvider } from './store/UserInfoProvider';

const App = () => {
	return (
		<UserInfoProvider>
			<Form />
		</UserInfoProvider>
	);
};

export default App;
