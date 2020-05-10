import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);
// http://localhost:3333/appointments/

export default routes;
