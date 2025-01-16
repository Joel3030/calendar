import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { CalendarPage } from '../calendar/pages';

export const AppRouter = () => {
	const auth = false;

	return (
		<Routes>
			{!auth ? (
				<Route path='/auth/*' element={<LoginPage />}></Route>
			) : (
				<Route path='/*' element={<CalendarPage />}></Route>
			)}

			<Route path='/*' element={<Navigate to='/auth/login' />}></Route>
		</Routes>
	);
};
