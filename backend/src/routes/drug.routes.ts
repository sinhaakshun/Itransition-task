import express from 'express';
import { getDrugs, getCompanies } from '../controllers/drug.controller';

const router = express.Router();

router.get('/drugs', getDrugs);
router.get('/companies', getCompanies);

export default router;
