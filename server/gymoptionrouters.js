import express from 'express';
import { addGymOption, getGymOption } from '../controller/gym-options-controller.js';


const gymOptionroute = express.Router();

gymOptionroute.get('/getgymoptions', getGymOption);
gymOptionroute.post('/addgymoptions', addGymOption);

export default gymOptionroute;