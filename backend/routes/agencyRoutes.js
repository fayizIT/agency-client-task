import express from 'express';
import { createAgencyAndClient } from '../controllers/agencyController.js';

const router = express.Router();

router.post('/create', createAgencyAndClient);

export default router;
