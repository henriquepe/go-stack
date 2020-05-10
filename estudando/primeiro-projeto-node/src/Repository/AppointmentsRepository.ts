import Appointment from '../Models/Appointment';
import DateCreateAppointmentService from '../Services/DateCreateAppointment.Service';

interface CreateAppointmentsDTO {
	provider: string;
	date: Date;
}

export default class Repository {
	private appointments: Appointment[];

	constructor() {
		this.appointments = [];
	}

	public showAll(): Appointment[] {
		return this.appointments;
	}

	public create({ provider, date }: CreateAppointmentsDTO): Appointment {
		const appointmentDataService = new DateCreateAppointmentService(
			this.appointments,
		);

		const appointment = appointmentDataService.verifyAppointmentInTheSameDate(
			provider,
			date,
		);

		this.appointments.push(appointment);

		return appointment;
	}
}
