import { addHours } from 'date-fns';
import { Calendar } from 'react-big-calendar';

import { localizer } from '../../helpers';
import { Navbar } from '../components';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const myEventsList = [
	{
		title: `Joel's birthday`,
		notes: 'We have to buy the cake',
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: '#fafafa',
		user: {
			_id: '123',
			name: 'Joel',
		},
	},
];

export const CalendarPage = () => {
	const eventStyleGetter = (event, start, end, isSelected) => {
		console.log({ event, start, end, isSelected });

		const style = {
			backgroundColor: '#347CF7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	return (
		<>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 500 }}
				eventPropGetter={eventStyleGetter}
			/>
		</>
	);
};
