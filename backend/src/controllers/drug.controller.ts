import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { DrugFilterDTO } from '../dtos/drugFilter.dto';
import logger from '../logger/logger';
import drugService from '../services/drug.service';

export const getDrugs = async (req: Request, res: Response) => {
  const dto = plainToInstance(DrugFilterDTO, req.query);

  const errors = await validate(dto);
  if (errors.length > 0) {
    logger.warn('Invalid query params');
    return res.status(400).json({ error: 'Invalid query parameters' });
  }

  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const [drugs, totalCount] = await drugService.getPaginatedDrugs(dto.company, offset, limit);

    res.status(200).json({
      data: drugs,
      total: totalCount,
      page,
      limit
    });
  } catch (error) {
    logger.error(`Failed to get drugs: ${error}`);
    res.status(500).json({ error: 'Failed to fetch drugs' });
  }
};


export const getCompanies = async (_: Request, res: Response) => {
  try {
    const companies = await drugService.getAllCompanies();
    logger.info(`Returned ${companies.length} companies`);
    res.status(200).json(companies);
  } catch (error) {
    logger.error(`Failed to get companies: ${error}`);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
};
