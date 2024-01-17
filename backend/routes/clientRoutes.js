import express from 'express';
import { updateClient, getTopClientDetails } from '../controllers/clientController.js';

const router = express.Router();

router.put('/update/:clientId', updateClient);
router.get('/top-client-details', getTopClientDetails);

export default router;
