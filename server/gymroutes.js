import express from 'express';
import { addGym, getGyms } from '../controller/gym-controller.js';

const gymRouters = express.Router();

gymRouters.get('/get', getGyms);
gymRouters.post('/addgym', addGym);

export default gymRouters;