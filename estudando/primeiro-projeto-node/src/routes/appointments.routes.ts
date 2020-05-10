import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../Repository/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
	const appointments = appointmentsRepository.showAll();

	return response.status(200).json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
	try {
		const { provider, date } = request.body;

		const formatedDate = parseISO(date);

		const appointment = appointmentsRepository.create({
			provider,
			date: formatedDate,
		});

		return response.json(appointment);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default appointmentsRouter;

/*

*/
