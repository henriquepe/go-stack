import { startOfHour, isEqual } from 'date-fns';
import Appointment from '../Models/Appointment';

export default class DateCreateAppointmentService {
	appointments: Appointment[];

	constructor(appointments: Appointment[]) {
		this.appointments = appointments;
	}

	public verifyAppointmentInTheSameDate(
		provider: string,
		date: Date,
	): Appointment {
		const dateWithStartedHour = startOfHour(date);

		const findAppointmentInTheSameDate = this.appointments.find(appointment =>
			isEqual(dateWithStartedHour, appointment.date),
		);

		if (findAppointmentInTheSameDate) {
			throw Error('This appointment is already booked');
		}

		const appointment = new Appointment({
			provider,
			date: dateWithStartedHour,
		});

		return appointment;
	}
}
